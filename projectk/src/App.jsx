import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
<h2>HTML Forms</h2>
<label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <label for="psw-repeat">
      Repeat Password</label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>

</>


  )
}

export default App
