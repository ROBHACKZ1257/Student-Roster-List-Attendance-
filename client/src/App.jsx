import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/user/Login'
import Signup from './pages/user/Signup'
import Index from './pages/Index.jsx'
import AttendanceSheet from './pages/AttendanceSheet'
import axios from 'axios'
import New from './pages/New'
import Show from './pages/Show'

function App() {

  const [user,setUser] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  async function getUser() {
    
    try {
      
      const response = await axios.get('/api/student', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      console.log(response)
      setUser(response.data)
    } catch(err) {
      console.log(err)
      localStorage.removeItem("token")
    }
    setIsLoading(false)
}

  useEffect(() => {
    
      let token = localStorage.getItem("token")

      if (token) {
          getUser()
      } else {
          setIsLoading(false)
      }

  }, [])

  let loggedIn = user.username

  return (
  <div className='w-screen'>
    <Navbar />
    <Routes>
        <Route element={<Index setUser={setUser}/>} path='/index' />
        <Route element={<AttendanceSheet setUser={setUser} />} path='/attendancesheet' />
        <Route element={<Login />} path='/login' />
        <Route element={<Signup />} path='/signup' />
        <Route element={<New  setUser={setUser} />} path='/new' />
        <Route element={<Show setUser={setUser} />} path='/:id' />
      </Routes>
  </div>
  )
}

export default App
