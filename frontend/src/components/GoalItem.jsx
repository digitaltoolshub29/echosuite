import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import { FaTimes, FaTwitter, FaFileAlt, FaCopy } from 'react-icons/fa'
import { toast } from 'react-toastify'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    toast.success(`${type} Copied! 📋`)
  }

  return (
    <div className='goal' style={{ position: 'relative', backgroundColor: 'var(--color-bg-secondary, #fff)', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginTop: '30px', maxWidth: '800px', margin: '30px auto' }}>
      
      {/* زر الحذف */}
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close' style={{ position: 'absolute', top: '15px', right: '15px', border: 'none', background: 'none', cursor: 'pointer', color: '#ff6b6b', fontSize: '1.2rem' }}>
        <FaTimes />
      </button>

      <div style={{ color: 'var(--color-text-secondary, #888)', fontSize: '0.8rem', marginBottom: '15px' }}>
        {new Date(goal.createdAt).toLocaleString('en-US')}
      </div>
      
      <h2 style={{ marginBottom: '20px', color: 'var(--color-text-primary, #333)', wordBreak: 'break-all' }}>📺 {goal.text}</h2>
      
      {/* Transcript Preview */}
      <div style={{ backgroundColor: 'var(--color-bg-tertiary, #f9f9f9)', padding: '15px', borderRadius: '8px', fontSize: '13px', color: 'var(--color-text-secondary, #666)', marginBottom: '25px', lineHeight: '1.6' }}>
        <strong>Transcript Preview:</strong> {goal.transcript ? goal.transcript.substring(0, 150) + '...' : 'Processing...'}
      </div>

      {/* AI Blog Post */}
      {goal.blogPost && (
        <div style={{ borderTop: '1px solid var(--color-border, #eee)', paddingTop: '20px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-primary, #2c3e50)', margin: 0 }}>
              <FaFileAlt style={{ marginRight: '8px' }} /> AI Blog Post
            </h3>
            <button onClick={() => copyToClipboard(goal.blogPost, 'Blog Post')} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#4a90e2' }} title="Copy Blog Post">
              <FaCopy size={18} />
            </button>
          </div>
          <div style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--color-text-primary, #444)', whiteSpace: 'pre-line' }}>
            {goal.blogPost}
          </div>
        </div>
      )}

      {/* AI Tweets */}
      {goal.tweets && goal.tweets.length > 0 && (
        <div style={{ borderTop: '1px solid var(--color-border, #eee)', paddingTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', color: '#1da1f2', margin: 0 }}>
              <FaTwitter style={{ marginRight: '8px' }} /> AI Tweets
            </h3>
            {/* تم حذف زر النسخ الجماعي من هنا */}
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {goal.tweets.map((tweet, index) => (
              <li key={index} style={{ 
                  backgroundColor: '#1da1f2', // خلفية زرقاء داكنة
                  color: '#ffffff', // نص أبيض
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
  )
}

export default GoalItem
