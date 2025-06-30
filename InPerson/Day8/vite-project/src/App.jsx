import './App.css'
import { useState } from 'react'
function App() {
  const [name,setName]=useState("")
  const [username,setUser]=useState("")
  const [password,setPass]=useState("")


  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleUserChange(event){
    setUser(event.target.value)
  }
  function handlePassChange(event){
    setPass(event.target.value)
  }

  return(
    <div>
    <div style={{display:"flex", flexDirection:"column", gap:'5px'}}>
      <input value={name} onChange={handleNameChange} placeholder='Name'></input>
      <input value={username} onChange={handleUserChange} placeholder="Username"></input>
      <input value={password} onChange={handlePassChange} placeholder='Password'></input>
    </div>
    </div>
  )
}

export default App

