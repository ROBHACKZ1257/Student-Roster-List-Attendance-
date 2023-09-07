import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'



export default function Navbar (){
    const navigate = useNavigate()
    return(
        <div className='flex flex-col justify-center '>
            <h1 className="text-center text-2xl font-bold text-white bg-red-900 p-4">Attendance sheet for Students</h1>
            <div className="flex justify-center bg-gray-200">
            <button className='rounded m-4 px-4 py-2 hover:bg-gray-500' onClick={() => navigate ('/Login') }>Login</button>
            <button className='rounded m-4 px-4 py-2 hover:bg-gray-500' onClick={() => navigate ('/Signup') }>Signup</button>
            </div>
            
        </div>

    )
} 