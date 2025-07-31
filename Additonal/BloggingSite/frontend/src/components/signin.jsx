import React from 'react'
import {useRef} from 'react'
import axios from 'axios'

function Signin(){
  const userRef=useRef()
  const passRef=useRef()

  async function signingIn(){
    let username=userRef.current.value
    let password=passRef.current.value
    try{
    let response=await axios.post('http://localhost:3000/signin',{
      username:username,
      password:password
    })
    let token=response.data.token
    localStorage.setItem('token',token)
    window.location='/blogs'
  }
  catch(err){
    console.log(err)
    alert("Invalid credentials")
  }
  }

  return <div>
    <input type="text" placeholder="Username" ref={userRef}/>
    <input type='text' placeholder="Password" ref={passRef}/>
    <button onClick={signingIn}>Sign In</button>
  </div>
}

export default Signin