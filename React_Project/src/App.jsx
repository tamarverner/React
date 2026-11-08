import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Course1 from './components/Course1'
import PersonalDetails from './components/PersonalDetails'
import Books from './components/Books'
import PersonDetails from './components/PersonDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <PersonalDetails/>
  <Books/>
<PersonDetails/>

    </>
  )
}

export default App
