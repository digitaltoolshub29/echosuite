import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/auth/goals/goalSlice'
// استيراد أيقونة النسخ
import { FaTimes, FaTwitter, FaFileAlt, FaCopy } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
// استيراد التنبيهات
import { toast } from 'react-toastify'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  // وظيفة النسخ الذكية
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    toast.success(`${type} Copied! 📋`)
  }

  // دالة لدمج التغريدات في نص واحد للنسخ
  const copyTweets = () => {
    const tweetsText = goal.tweets.join('\n\n')
    copyToClipboard(tweetsText, 'Tweets')
  }

  return (
    <div className='goal' style={{ position: 'relative', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <div style={{ color: '#888', fontSize: '0.8rem', marginBottom: '10px' }}>
        {new Date(goal.createdAt).toLocaleString('en-US')}
      </div>
      
      <h2 style={{ marginBottom: '15px', color: '#333' }}>📺 {goal.text}</h2>

      {/* Transcript Preview */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', fontSize: '13px', color: '#666', marginBottom: '20px' }}>
        <strong>Transcript Preview:</strong><br/>
        {goal.transcript ? goal.transcript.substring(0, 100) + '...' : 'Processing...'}
      </div>

      {/* AI Blog Post */}
      {goal.blogPost && (
        <div style={{ borderTop: '2px solid #f0f0f0', paddingTop: '20px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', color: '#2c3e50', margin: 0 }}>
              <FaFileAlt style={{ marginRight: '8px' }} /> AI Blog Post
            </h3>
            {/* زر نسخ المقال */}
            <button 
              onClick={() => copyToClipboard(goal.blogPost, 'Blog Post')}
              style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#777' }}
              title="Copy Blog Post"
            >
              <FaCopy />
            </button>
          </div>
          
          <div style={{ fontSize: '15px', lineHeight: '1.7', color: '#444' }}>
            <ReactMarkdown>{goal.blogPost}</ReactMarkdown>
          </div>
        </div>
      )}

      {/* AI Tweets */}
      {goal.tweets && goal.tweets.length > 0 && (
        <div style={{ borderTop: '2px solid #f0f0f0', paddingTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', color: '#1da1f2', margin: 0 }}>
              <FaTwitter style={{ marginRight: '8px' }} /> AI Tweets
            </h3>
            {/* زر نسخ التغريدات */}
            <button 
              onClick={copyTweets}
              style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#777' }}
              title="Copy All Tweets"
            >
              <FaCopy />
            </button>
          </div>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {goal.tweets.map((tweet, index) => (
              <li key={index} style={{ backgroundColor: '#e8f5fd', padding: '12px', margin: '10px 0', borderRadius: '8px', fontSize: '14px', borderLeft: '4px solid #1da1f2' }}>
                {tweet}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close' style={{ top: '20px', right: '20px' }}>
        <FaTimes />
      </button>
    </div>
  )
}

export default GoalItem

