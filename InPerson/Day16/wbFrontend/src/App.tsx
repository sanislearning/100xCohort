import './App.css'
import { useEffect,useState } from 'react';

function App() {
  const [socket,setSocket]=useState();
  function sendMessage() {
    if (!socket){
      return;
    }
    socket.send('ping')
  }

  useEffect(()=>{
    fetch('http://localhost:8000/users')
    const ws=new WebSocket('ws:localhost:8000')
    ws.onmessage=(ev)=>{
      alert(ev.data)
    }
  },[])

  return (
    <div>
      <input type="text" placeholder="Message"></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
