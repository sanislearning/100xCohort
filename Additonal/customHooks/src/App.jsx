//Work on thi and get the useFetch right 

import { useState,useEffect } from "react"
import './App.css'
import axios from 'axios'
function App(){
  const [post,setPost]=useState({})
  async function getPosts(){
    let value=await axios.get("http://randomurl.com")
    setPost(value)
    console.log(post)
  }
  
  useEffect(()=>{
    getPosts()
  },[])
  return <div>
  </div>
}


function Counter(){
  return <div>
  </div>
}

export default App