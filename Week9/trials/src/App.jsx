import { useState,useEffect} from 'react'
import './App.css'
//useEffect,dependency array, cleanups

function App() {
  const [count,setCount]=useState(0)
  const [count2,setCount2]=useState(0)
  function increase(){
    setCount(c=>c+1);
  }
  function decrease(){
    setCount2(c=>c-1)
  }
  return <div>
    <Counter count={count} count2={count2}></Counter>
    <button onClick={increase}>Increase Count</button>
    <button onClick={decrease}>Decrease Count</button>
  </div>
}

function Counter(props){

  useEffect(function(){
    console.log("mount")
  
    return function(){
      console.log("unmount")
  }
},[]) 

  useEffect(function(){
    console.log("Count has changed")
    return function(){
      console.log("Cleanup inside second effect")
    }
  },[props.count,props.count2])
  return <div>Counter {props.count} {props.count2}</div>
}
export default App
