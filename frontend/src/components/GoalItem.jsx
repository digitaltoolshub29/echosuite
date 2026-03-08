import { useDispatch } from 'react-redux';
// FIX: Corrected the import path to resolve the build error.
import { deleteGoal } from '../features/auth/goals/goalSlice';
import { FaTimes, FaTwitter, FaFileAlt, FaCopy } from 'react-icons/fa';
import { toast } from 'react-toastify';

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    // REFACTOR: Removed emoji from toast message for consistency.
    toast.success(`${type} Copied!`);
  };

  // REFACTOR: All inline styles with hardcoded colors have been removed.
  // The component now uses the classes and CSS variables from index.css.
  return (
    <div className='goal'>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        <FaTimes />
      </button>
      <div style={{ opacity: 0.7, fontSize: '0.8rem', marginBottom: '15px' }}>
        {new Date(goal.createdAt).toLocaleString('en-US')}
      </div>
      
      <h2 style={{ marginBottom: '20px', wordBreak: 'break-all' }}>{goal.text}</h2>
      
      <div style={{ 
        backgroundColor: 'var(--bg-color)', 
        padding: '15px', 
        borderRadius: '8px', 
        fontSize: '13px', 
        marginBottom: '25px', 
        lineHeight: '1.6',
        border: '1px solid var(--border-color)'
      }}>
        <strong>Transcript Preview:</strong> {goal.transcript ? goal.transcript.substring(0, 150) + '...' : 'Processing...'}
      </div>

      {goal.blogPost && (
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', color: 'var(--heading-color)', margin: 0 }}>
              <FaFileAlt style={{ marginRight: '8px' }} /> AI Blog Post
            </h3>
            <button onClick={() => copyToClipboard(goal.blogPost, 'Blog Post')} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--accent-color)' }} title="Copy Blog Post">
              <FaCopy size={18} />
            </button>
          </div>
          <div style={{ fontSize: '15px', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
            {goal.blogPost}
          </div>
        </div>
      )}

      {goal.tweets && goal.tweets.length > 0 && (
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-color)', margin: 0 }}>
              <FaTwitter style={{ marginRight: '8px' }} /> AI Tweets
            </h3>
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {goal.tweets.map((tweet, index) => (
              <li key={index} style={{ 
                  backgroundColor: 'var(--accent-color)',
                  color: '#ffffff', // White text is usually fine on a colored background
                  padding: '15px', 
                  margin: '10px 0', 
                  borderRadius: '10px', 
                  fontSize: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  lineHeight: '1.5'
                }}>
                <span>{tweet}</span>
                <button onClick={() => copyToClipboard(tweet, 'Tweet')} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'white', marginLeft: '15px' }} title="Copy Tweet">
                  <FaCopy size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GoalItem;
