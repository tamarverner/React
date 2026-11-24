import React from 'react'

const PersonalDetails = () => {
    function functionName(event)
    {
        console.log("typing..."+event.target.value);
    }
    function handleSubmit(event) {
         event.preventDefault();
        alert("הטופס נשלח בהצלחה");
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="הכנס שם פרטי" onChange={functionName}/>
        <input type="text" placeholder="הכנס שם משפחה" onChange={functionName}/>
        <button >לשליחה</button>
    </form>
  )
}

export default PersonalDetails