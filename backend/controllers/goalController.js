const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const Groq = require('groq-sdk');
const axios = require('axios');

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

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
    // التعديل الجوهري: نطلب من الذكاء الاصطناعي إرجاع إجابة بهيئة JSON مقسمة
    const prompt = `
      You are an expert content creator working for Zenith.
      Here is a transcript from a YouTube video: 
      "${videoContent}"
      
      Based ONLY on this transcript, generate the following in highly professional English.
      You MUST return ONLY a valid JSON object with the following exact keys:
      {
        "blogPost": "Write a clear, structured, SEO-optimized blog post with paragraphs.",
        "tweets": ["Tweet 1 text", "Tweet 2 text", "Tweet 3 text"]
      }
      Do not include any other text, markdown, or explanation outside the JSON object.
    `;

    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.1-8b-instant",
      // إجبار المحرك على إرجاع JSON فقط
      response_format: { type: "json_object" } 
    });

    let aiData;
    try {
        aiData = JSON.parse(chatCompletion.choices[0]?.message?.content);
    } catch(e) {
        throw new Error("Failed to parse AI response.");
    }

    // تجهيز البيانات لتتوافق تماماً مع الواجهة الأمامية القديمة الأنيقة
    const goal = await Goal.create({
      text: youtubeUrl,
      transcript: "Transcript successfully processed.", // يمكن وضع النص هنا إذا أردتِ ظهوره
      blogPost: aiData.blogPost || "Blog post generation failed.",
      tweets: aiData.tweets || ["Failed to generate tweets"],
      user: req.user.id,
    });

    res.status(200).json(goal);

  } catch (error) {
    console.error('AI Error:', error);
    res.status(500);
    throw new Error('AI Engine Error.');
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
