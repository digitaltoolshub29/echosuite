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
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text' style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px', display: 'block' }}>YouTube Video URL</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Paste your link here...'
            style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #ccc', fontSize: '1rem', marginBottom: '15px' }}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit' style={{ padding: '15px', fontSize: '1.1rem', borderRadius: '10px' }}>
            Generate Content 🚀
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
