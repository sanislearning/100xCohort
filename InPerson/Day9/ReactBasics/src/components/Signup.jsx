import axios from 'axios'
import './signup.css'
function Signup(){
    function signup(){
    axios.post("http://localhost:3000/signup",{
        username:document.getElementById("Username").value,
        password:document.getElementById("Password").value
    }).then(function(){
        window.location='/signin'
    })
    }
    return (
        <div className='SignUp'>
        <input type="text" placeholder='Username' id="Username"/>
        <input type="text" placeholder='Password' id="Password"/>
        <button onClick={signup} className='buttonup'>Sign Up</button>
        </div>
    )
}
export default Signup