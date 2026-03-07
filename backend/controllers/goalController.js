const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const Groq = require('groq-sdk');
const axios = require('axios');

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

// --- دالة التصحيح الإملائي ---
function correctSpelling(text) {
    if (!text) return text;
    return text.replace(/IESL/gi, 'IELTS');
}

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
});

function extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a YouTube link');
    }

    const youtubeUrl = req.body.text;
    const videoId = extractVideoId(youtubeUrl);
    
    if (!videoId) {
        res.status(400);
        throw new Error('Invalid YouTube URL');
    }

    let videoContent = "";
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-transcript3.p.rapidapi.com/api/transcript',
            params: { videoId: videoId },
            headers: {
                'x-rapidapi-host': 'youtube-transcript3.p.rapidapi.com',
                'x-rapidapi-key': process.env.RAPID_API_KEY
            }
        };
        const response = await axios.request(options);
        
        if (response.data && response.data.transcript && response.data.transcript.length > 0) {
            let fullText = response.data.transcript.map(item => item.text).join(' ');
            videoContent = fullText.substring(0, 15000); 
        } else {
            throw new Error("No transcript found.");
        }
    } catch (error) {
        console.error('RapidAPI Error:', error.message);
        res.status(400);
        throw new Error('Could not read this video. Captions might be disabled.');
    }

    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are a world-class content creation assistant for a company named Zenith. Your task is to generate a blog post and three tweets based on a provided YouTube video transcript.
                    You MUST ONLY respond with a single, valid, minified JSON object. Do not include any text, explanation, or markdown before or after the JSON object.
                    The JSON object must have the following exact structure: { "blogPost": "...", "tweets": ["...", "...", "..."] }`
                },
                {
                    role: "user",
                    content: `Here is the transcript: "${videoContent}"`
                }
            ],
            model: "llama-3.1-8b-instant",
            response_format: { type: "json_object" } 
        });

        let aiData;
        const aiResponseContent = chatCompletion.choices[0]?.message?.content;

        if (!aiResponseContent) {
            throw new Error("AI returned an empty response.");
        }

        try {
            aiData = JSON.parse(aiResponseContent);
        } catch(e) {
            console.error("Raw AI Response that failed to parse:", aiResponseContent);
            throw new Error("Failed to parse AI response into JSON.");
        }

        if (!aiData.blogPost || !aiData.tweets) {
            console.error("Parsed AI Data was missing keys:", aiData);
            throw new Error("AI response is missing required JSON keys (blogPost or tweets).");
        }

        const correctedBlogPost = correctSpelling(aiData.blogPost);
        const correctedTweets = aiData.tweets.map(tweet => correctSpelling(tweet));

        const goal = await Goal.create({
            text: youtubeUrl,
            transcript: "Transcript successfully processed.",
            blogPost: correctedBlogPost,
            tweets: correctedTweets,
            user: req.user.id,
        });

        res.status(200).json(goal);

    } catch (error) {
        console.error('AI Engine Error:', error);
        res.status(500);
        throw new Error('An error occurred with the AI Engine.');
    }
});

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) { res.status(400); throw new Error('Goal not found'); }
    if (goal.user.toString() !== req.user.id) { res.status(401); throw new Error('Not authorized'); }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) { res.status(400); throw new Error('Goal not found'); }
    if (goal.user.toString() !== req.user.id) { res.status(401); throw new Error('Not authorized'); }
    await goal.deleteOne();
    res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
