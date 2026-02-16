import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import { getGoals, reset } from '../features/auth/goals/goalSlice'
import { FaHandSparkles, FaRobot } from 'react-icons/fa'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  // --- Smart Loading State ---
  const [loadingMsg, setLoadingMsg] = useState('Initializing AI... 🤖')
  
  useEffect(() => {
    if (isLoading) {
      const messages = [
        '🤖 AI is watching the video...',
        '📝 Drafting the blog post...',
        '🐦 Crafting viral tweets...',
        '✨ Polishing the content...',
        '🚀 Almost ready!'
      ]
      let i = 0
      const interval = setInterval(() => {
        setLoadingMsg(messages[i])
        i = (i + 1) % messages.length
      }, 2000) // Change message every 2 seconds
      return () => clearInterval(interval)
    }
  }, [isLoading])
  // ---------------------------

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    } else {
      dispatch(getGoals())
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  // --- Custom Loading Screen ---
  if (isLoading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', textAlign: 'center' }}>
        <div className="loadingSpinner" style={{ marginBottom: '20px' }}></div>
        <h2 style={{ color: '#4a90e2' }}>{loadingMsg}</h2>
        <p style={{ color: '#888' }}>Please wait while we create magic.</p>
      </div>
    )
  }

  return (
    <>
      <section className='heading' style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          Welcome {user && user.name} 
          <FaHandSparkles style={{ color: '#fca311' }} />
        </h1>
        <p style={{ color: '#888' }}>Content Dashboard</p>
      </section>

      <GoalForm />

      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '50px', color: '#ccc' }}>
            <FaRobot size={50} style={{ marginBottom: '20px' }} />
            <h3>No content generated yet.</h3>
            <p>Paste a YouTube link above to start!</p>
          </div>
        )}
      </section>
    </>
  )
}

export default Dashboard
