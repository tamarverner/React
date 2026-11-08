import React from 'react'
import Course1 from './Course1';
import Course2 from './Course2';
const PersonalDetails = () => {
  return (
<div>
      <h1>הפרטים האישיים שלי</h1>
      <h1>שם: תמר</h1>
      <h1>גיל: 20</h1>
      <Course1/>
    <Course2/>

    </div>
  )
}

export default PersonalDetails