import React from 'react'
import axios from 'axios'
import { useState,useEffect,useRef } from 'react'

function Blogs(){
  const [blogs,setBlogs]=useState([])
  async function getBlogs(){
    let token=localStorage.getItem('token')
    let response=await axios.get("http://localhost:3000/blogs",{
      headers:{token:token}
    })
    setBlogs(response.data)
    console.log(response.data)
  }
  useEffect(()=>{getBlogs()},[])
  
  return <div>
    <BlogRender blogs={blogs}/>
    <AddBlog/>
  </div>
}

function AddBlog(){
  const titleRef=useRef()
  const descRef=useRef()
  
  function AddNew(){
    const title=titleRef.current.value
    const description=descRef.current.value
    axios.post('http://localhost:3000/blogs',{
      title:title,
      description:description
    },{headers:{token:localStorage.getItem('token')}})
  }
  return <div>
    <input type="text" placeholder="Title" ref={titleRef}/>
    <input type="textarea" placeholder='Description' ref={descRef}/>
    <button onClick={AddNew}>Add Blog</button>
  </div>
  
}

function BlogRender({blogs}){
  return <div>
    {blogs.map(blog=>(<div key={blog._id}><h2>{blog.title}</h2>
    <p>{blog.description}</p>
    </div>))}
  </div>
}

export default Blogs