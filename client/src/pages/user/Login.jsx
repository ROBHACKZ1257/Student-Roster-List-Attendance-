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
      <h1 className='text-center text-xl font-semibold m-4 '>Teacher Login</h1>
      <form className='flex flex-col border rounded-xl shadow-xl mx-auto p-4' onSubmit={handleSubmit}>
        <label className='w-fit p-4' htmlFor="email"><b>Email Address</b>
        <input className='w-96 m-4 p-2 border' type="text" placeholder="Enter Email" name="email" required onChange={handleChange}
        value={form.email} />
      </label>
        <label className='w-fit p-4' htmlFor="psw"><b>Password</b>
        <input className='w-96 m-4 p-2 border' type="password" placeholder="Enter Password" name="password" required onChange={handleChange}
        value={form.psw} />
        </label>
        <button className='bg-red-900 rounded-full text-lg-auto px-4 py-2'>Submit</button>
    </form>
  </div>
  
  )
}

export default Login
