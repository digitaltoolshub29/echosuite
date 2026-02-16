import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/auth/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

  return (
    <section className='form' style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <form onSubmit={onSubmit} style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <div className='form-group' style={{ marginBottom: '20px' }}>
          <label htmlFor='text' style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#333' }}>YouTube Video URL</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Paste your link here...'
            style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit' style={{ width: '100%', padding: '15px', backgroundColor: '#4a90e2', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer', transition: 'background 0.3s' }}>
            Generate Content 🚀
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
