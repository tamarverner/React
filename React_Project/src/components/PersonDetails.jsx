import React from 'react'
import CourseDetails from './CourseDetails'
const PersonDetails = () => {
  return (
    <div>
        <h1>name:tamar</h1>
        <h1>age:20</h1>
        <CourseDetails name="חשבון" grade={95} />
        <CourseDetails name="אנגלית" grade={90} />
    </div>
  )
}

export default PersonDetails