import { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'


let emptyForm = { 
  password: '',
  email: ''
}

function Login() {
  let [form, setForm] = useState(emptyForm)

  const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(form)
    try {
        const authResponse = await axios.post('/auth/login', form)
        console.log(authResponse)
        const token = authResponse.data.token

        if (!token) {
            setForm(emptyForm)
            return
        }

        localStorage.setItem("token", token)

        // const userResponse = await axios.get('/api/users', {
        //     headers: {
        //       Authorization: `Bearer ${localStorage.getItem('token')}`
        //     }
        //   })

        // setUser(userResponse.data)

        navigate('/attendancesheet')

    } catch(err) {

        console.log(err)
        alert(err.response.data.error)

    }
}

  return (
    <div className="container">
      <h1>Teacher Login</h1>
      <nav>
      {/* <button className='button' onClick={() => navigate ('/Login') }>Login Page</button> */}
      <button className='button' onClick={() => navigate ('/Signup') }>Signup Page</button>
      </nav>
      <form onSubmit={handleSubmit}>
    <label htmlFor="email"><b>Email Address</b></label>
    <input type="text" placeholder="Enter Email" name="email" required onChange={handleChange}
    value={form.email} />
  
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange}
    value={form.psw} />
    <button>Submit</button>
    </form>
  </div>
  
  )
}

export default Login
