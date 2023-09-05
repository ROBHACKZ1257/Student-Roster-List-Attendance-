import { useState } from 'react'
import './App.css'
import AttendanceSheet from './pages/AttendanceSheet'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Index from './pages/index'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({})
  let navigate = useNavigate()

  return (
  <div>
      {/* <nav>
      <button className='button' onClick={() => navigate ('/Login') }>Login Page</button>
      <button className='button' onClick={() => navigate ('/Signup') }>Signup Page</button>
      </nav> */}
    
    <Routes>
        <Route element={<Index />} path='/' />
        <Route element={<AttendanceSheet setUser={setUser} />} path='/attendancesheet' />
        <Route element={<Login />} path='/login' />
        <Route element={<Signup />} path='/signup' />
      </Routes>
  </div>
  )
}

export default App
