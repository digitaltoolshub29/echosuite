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
          <label htmlFor='text'>YouTube Video URL</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Paste your link here...'
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Generate Content
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
