import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Privacy from './pages/Privacy' // صفحة جديدة
import Terms from './pages/Terms'     // صفحة جديدة

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/privacy' element={<Privacy />} /> {/* مسار جديد */}
            <Route path='/terms' element={<Terms />} />     {/* مسار جديد */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
