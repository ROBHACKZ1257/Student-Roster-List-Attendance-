import { useRef } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
// import Trainers from "../components/Trainers";

function AttendanceSheet({setUser}) {

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
            <h1>Attendance Sheet for Students</h1>
            <form onSubmit={handleSubmit}>
            {/* <h1 className='text-hover'>{trainer.name}</h1> */}

                <button>Submit</button>
            </form>

            <button onClick={() => {
                localStorage.removeItem("token")
                setUser({})
                navigate(`/`)
                }}>Logout</button>
        </>
    );
}

export default AttendanceSheet;