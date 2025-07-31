import {useRef} from 'react'
import axios from 'axios'

function Signup(){
    const userRef=useRef()
    const passRef=useRef()

    async function signingUp(){
        let username=userRef.current.value
        let password=passRef.current.value
        try{
        await axios.post('http://localhost:3000/signup',{
            username:username,
            password:password
        })
        window.location='/'
        }
        catch(err){
            console.log(err)
            console.log("You have an error")
        }
    }
    
    return <div style={{display:'flex',flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
        <h1>Sign Up</h1>
        <input placeholder="username" type="text" ref={userRef}/>
        <input placeholder="password" type="text" ref={passRef}/>
        <button onClick={signingUp}>Submit</button>
    </div>
}
export default Signup