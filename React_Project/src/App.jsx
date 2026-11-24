import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import School from './components/School'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <School/>
    </div>
  )
}

export default App
