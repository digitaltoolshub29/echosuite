import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'
import { FaMagic } from 'react-icons/fa'

function GoalForm() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createGoal({ text }))
    setText('')
  }

  return (
    // Using the .form class from index.css
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
            placeholder='Paste your YouTube link here...'
            // Input now gets its style from index.css
          />
        </div>
        <div className='form-group'>
          {/* Button now gets its style from .btn class in index.css */}
          <button className='btn btn-block' type='submit'>
            <FaMagic /> Generate Content
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
