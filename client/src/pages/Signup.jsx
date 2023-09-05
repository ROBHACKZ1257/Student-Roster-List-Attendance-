import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'

let emptyForm = { 
  username: '',
  password: '',
  email: ''
}

function Signup() {
  let [form, setForm] = useState(emptyForm)
  let navigate = useNavigate()
  const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const authResponse = await axios.post('/auth/register', form)
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

        navigate('/posts')

    } catch(err) {

        console.log(err)
        // alert(err.response.data.error)
        
    }
}

  return (
  <div>

    <div className="container">
    <h1>Signup for Teachers</h1>
    <nav>
      <button className='button' onClick={() => navigate ('/Login') }>Login Page</button>
      {/* <button className='button' onClick={() => navigate ('/Signup') }>Signup Page</button> */}
      </nav>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email"><b>Create Email Address</b></label>
    <input type="text" placeholder="Enter Email" name="email" required onChange={handleChange}
    value={form.email}/>
  
    <label htmlFor="password"><b>Create Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange}
    value={form.password}/>

      <button>Submit</button>
     </form>
    </div>
  </div>
  )
}

export default Signup
