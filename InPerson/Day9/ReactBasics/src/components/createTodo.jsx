import {useRef} from 'react'
import axios from 'axios'

export function CreateTodo({todo,setTodos}){
    const inputRef=useRef(); //New useRef object made
    function addTodo(){
        let value=inputRef.current.value //We added reference to the input box
        const newTodo={title:value,id:Math.floor(Math.random()*1000)}
        axios.post("http://localhost:3000/todo",{
            title:newTodo.title,
            id:newTodo.id
        },{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        setTodos([...todo,newTodo])
        inputRef.current.value=""
    }
    return <div>
        <input type="text" placeholder="Enter your Todo" ref={inputRef}/>
        <button onClick={addTodo}>Add todo</button>
    </div>
}
