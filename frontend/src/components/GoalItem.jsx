import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/auth/goals/goalSlice';
import { FaTimes, FaTwitter, FaFileAlt, FaCopy, FaHashtag } from 'react-icons/fa';
import { toast } from 'react-toastify';
import ReactMarkdown from 'react-markdown';

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} Copied!`);
  };

  return (
    <div className='goal'>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <FaTimes />
      </button>
      <div style={{ opacity: 0.7, fontSize: '0.8rem', marginBottom: '15px' }}>
        {new Date(goal.createdAt).toLocaleString('en-US')}
      </div>
      
      <h2 style={{ marginBottom: '20px', wordBreak: 'break-all' }}>{goal.text}</h2>
      
      {goal.blogPost && (
        <div className='output-section'>
          <div className='output-header'>
            <h3><FaFileAlt /> AI Blog Post</h3>
            <button onClick={() => copyToClipboard(goal.blogPost, 'Blog Post')} title="Copy Blog Post">
              <FaCopy />
            </button>
          </div>
          <div className='markdown-content'>
            <ReactMarkdown>{goal.blogPost}</ReactMarkdown>
          </div>
        </div>
      )}

      {goal.tweets && goal.tweets.length > 0 && (
        <div className='output-section'>
          <div className='output-header'>
            <h3><FaTwitter /> AI Tweets</h3>
          </div>
          <ul className='tweet-list'>
            {goal.tweets.map((tweet, index) => (
              <li key={index} className='tweet-card'>
                <span>{tweet}</span>
                <button onClick={() => copyToClipboard(tweet, 'Tweet')} title="Copy Tweet">
                  <FaCopy />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {goal.hashtags && goal.hashtags.length > 0 && (
        <div className='output-section'>
          <div className='output-header'>
            <h3><FaHashtag /> Suggested Hashtags</h3>
          </div>
          <div className='hashtag-container'>
            {goal.hashtags.map((tag, index) => (
              <span key={index} className='hashtag-pill'>{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GoalItem;
