import React from 'react'
import {useRef} from 'react'

function Signup(){
    const userRef=useRef()
    const nameRef=useRef()
    const passRef=useRef()
    
  return (
    <div>
        <h1>Sign Up</h1>
        <div>
            <input type="text" placeholder="Username" ref={userRef}/>
            <input type="text" placeholder="Name" ref={nameRef}/>
            <input type="text" placeholder="Password" ref={passRef}/>
            <button onClick={()=>useSignUp}>Sign Up</button>
        </div>
    </div>
  )
}


async function useSignUp(){
    const username=userRef.current.value
    const password=passRef.current.value
    const name=nameRef.current.value
    try{
    let signup=await axios.post("http://localhost:3000/signup",{
        username:username,
        password:password,
        name:name
    })
    }
    catch(err){
        console.log(err)
    }   
}
export default Signup

//fix this and learn how to do custom hooks, you are lazy so it will help