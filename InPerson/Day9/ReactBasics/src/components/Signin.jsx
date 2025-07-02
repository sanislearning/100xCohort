import axios from 'axios'
import './signin.css'
function Signin(){
    async function signin(){
        let response=await axios.post("http://localhost:3000/signin",{
            username:document.getElementById("username").value,
            password:document.getElementById("password").value,
        })
        localStorage.setItem("token",response.data.token)
        window.location="/dashboard"
    }



    return (
        <div className='SignIn'>
            <input id="username" type="text" placeholder="Username"></input>
            <input id="password" type="text" placeholder="Password"></input>
            <button onClick={signin} className='buttonIn'>Sign In</button>
        </div>
    )
}
export default Signin