import { useState } from 'react'
import './App.css'

function App() {

  const [timer, setTimer] = useState(0)

  return (
    <>
      <div>
        Hi there, this is the frontend
      </div>
      <div>
        <button onClick={() => {setTimer(timer + 1)}}>Increase</button>
        <span>{timer}</span>
      </div>
    </>
  )
}

export default App
