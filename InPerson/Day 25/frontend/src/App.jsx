import { useState,useRef } from 'react'
import './App.css'
import axios  from 'axios'
import ReactMarkdown from 'react-markdown'

function App() {
  const [answer,setAnswer] = useState("");
  const selectRef=useRef();
  const questionRef=useRef()

  async function sendMessage(){
    const question=questionRef.current.value
    const model=selectRef.current.value
    const response=await axios.post('http://localhost:3000/chat',{
      "question":question,
      "model":model
    })
    
    setAnswer(response.data.answer)
    questionRef.current.value=""
    selectRef.current.value=""
  }

  return(<>
    <div style={{display:"flex", flexDirection:'column',gap:'1rem',padding:'1rem'}}>
      <div
        style={{
          maxHeight:'300px',
          overflow:'auto',
          border:'1px solid #ccc',
          padding:'1rem',
          borderRadius:'8px',
          backgroundColor:'f9f9f9',
          whiteSpace:'pre-wrap'
        }}>
      <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
      <input id="prompt" type="text" placeholder="Chat here" ref={questionRef}/>
      <select ref={selectRef}>
        <option value="">Select</option>
        <option value="gemini-2.0-flash">Flash 2.0</option>
        <option value="gemini-2.5-flash">Flash 2.5</option>
      </select>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  </>)
}

export default App
