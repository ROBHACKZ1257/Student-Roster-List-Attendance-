import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

function New() {
    const navigate = useNavigate()
    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const gradeRef = useRef()
    const presentRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
        // console.log(typeof presentRef.current.checked)
        // return
        try {
            const newStudent= {
                firstname: firstnameRef.current.value,
                lastname: lastnameRef.current.value,
                grade:gradeRef.current.value,
                present: presentRef.current.checked,
            }
            console.log(newStudent)
            //make sure you have a controller and a route for this, this will be a post, and fill your C for CRUD
            const student = await axios.post(`/api/student`, newStudent)
            console.log(student)
            navigate(`/` + student.data._id)
        } catch(err) {
            console.log(err)
        }
    }

    return ( 
    <div>
        <h1 >New student</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">First name:<br />
                <input type="text"  name="firstname" ref={firstnameRef}/><br />
                </label>
                <label htmlFor="lname">Last name:<br />
                <input type= "text" name="lastname" ref={lastnameRef} /><br />
                </label>
                <label htmlFor="grade">Grade:<br />
                <input type="text" name="grade" ref={gradeRef} /><br />
                </label>
                <label htmlFor="present">Present:<br />
                <input type="checkbox" name="present" defaultValue={"false"} ref={presentRef} />
                </label>

                <button className="bg-red-900 rounded-full text-white m-auto px-4 py-2">Submit</button>
            </form>
    </div>
    );
}

export default New;