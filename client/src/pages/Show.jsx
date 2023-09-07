import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
const Show = () => {
   const {id} = useParams()
    const [student, setStudent] = useState(null)
    console.log(id)

    async function getStudent() {
        try {

            const student = await axios.get(`/api/student/${id}`)
            console.log(student.data)
            setStudent(student.data)
      } catch(err) {
            console.log(err)
        }
    }
   useEffect(()=>{
    getStudent()
   },[])

   const deleteStudent= async()=>{
     await axios.delete(`/api/student/${id}`)
     console.log('user id delete')
     alert('user is deleted')
     setStudent(null)
   }
    return (
        <div>
        {student && (<div>
            <h5>      name: {student.firstname}</h5>
            <h5> lastname: {student.lastname}</h5>
            <h5>   grade: {student.grade}</h5>
            <h5>  student is {student.present?"present":"absent"}</h5>
        </div>)}
        <button onClick={deleteStudent}>delete</button>
      
        </div>
    );
}

export default Show;