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

        navigate('/posts')

    } catch(err) {

        console.log(err)
        // alert(err.response.data.error)
        
    }
}

  return (
  <div>

    <div className="container">
    <h1 className='text-center text-xl font-semibold m-4 '>Signup for Teachers</h1>

      <form className='flex flex-col w-fit border rounded-xl shadow-xl mx-auto p-4' onSubmit={handleSubmit}>
      <label className='w-fit p-4' htmlFor="email"><b>Create Email Address</b><br/>
    <input className='w-96 m-4 p-2 border' type="text" placeholder="Enter Email" name="email" required onChange={handleChange}
    value={form.email}/>
    </label>
    <label className='w-fit p-4' htmlFor="password"><b>Create Password</b><br/>
    <input className='w-96 m-4 p-2 border' type="password" placeholder="Enter Password" name="password" required onChange={handleChange}
    value={form.password}/>
    </label>
      <button className="bg-red-900 rounded-full text-white m-auto px-4 py-2">Submit</button>
     </form>
    </div>
  </div>
  )
}

export default Signup
