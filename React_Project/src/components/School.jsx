import React from 'react'
import Student from './Student'
const School = () => {
     const students = [
    { id: 1, name: "משה", age: 14, average: 95 },
    { id: 2, name: "דוד", age: 15, average: 75 },
    { id: 3, name: "יוסף", age: 14, average: 52 },
    { id: 4, name: "יעקב", age: 16, average: 98 },
    { id: 5, name: "אברהם", age: 15, average: 58 }
    ]
    function outside() {
        console.log("השער נפתח")
    
    }
    return (
    <div>
        {
        students.map(student =>  <Student
        key={student.id}
        id={student.id}
        name={student.name}
        age={student.age}
        average={student.average}
        b={outside}
        />)
        }  
        
    </div>

)
}

export default School