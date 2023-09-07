import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import New from './New';


export default function Index() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [display, setDisplay] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [deletingStudent, setDeletingStudent] = useState(null);

    async function getStudents() {
        try {
            const response = await axios.get('/api/student');
            setStudents(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getStudents(); // Call the function when the component is mounted
    }, []);

    function handleCheckboxChange(index) {
        const updatedStudents = [...students];
        const student = updatedStudents[index]; // Get the student object
        if (student) {
            student.present = !student.present; // Check if student exists before accessing present
            setStudents(updatedStudents);
        }
    }

    function handleEditClick(student) {
        setEditingStudent(student);
        setDisplay(true);
    }

    function handleDeleteClick(index) {
        // Create a copy of the students array and remove the student at the specified index
        const updatedStudents = [...students];
        updatedStudents.splice(index, 1);
        setStudents(updatedStudents);
    }

    function handleDisplay() {
        setDisplay(!display);
    }

    return (
        <div>
            {students.map((student, index) => (
                <div className='a-student' key={index}>
                    <Link to={`/students/${student._id}`}>{`${student.firstname} ${student.lastname}`}</Link>
                    <p>
                        Present:
                        <input
                            type="checkbox"
                            checked={student.present?"present":"absent"} // Ensure a default value of false
                            onChange={() => handleCheckboxChange(index)}
                        />
                    </p>
                    <button onClick={() => handleEditClick(student)}>Edit</button>
                    <button onClick={() => handleDeleteClick(index)}>Delete</button> 
                </div>
            ))}
            <button onClick={handleDisplay}>New</button>
            {display && <New />}
        </div>
    );
}