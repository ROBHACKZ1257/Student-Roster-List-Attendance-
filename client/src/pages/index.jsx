import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"



function New() {

    const subjectRef = useRef()
    const bodyRef = useRef()

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const newPost = {
                subject: subjectRef.current.value,
                body: bodyRef.current.value
            }
            await axios.post(`/api/posts`, newPost)
            navigate(`/posts`)
        } catch(err) {
            console.log(err.message)
        }
    }

    return ( 
        <>
           <h1>Attendance List for Students</h1>
      <nav>
      <button className='button' onClick={() => navigate ('/Login') }>Login Page</button>
      <button className='button' onClick={() => navigate ('/Signup') }>Signup Page</button>
      </nav>
        </>
    );
}

export default New;