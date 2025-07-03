import axios from 'axios'
export function Todos({todo,setTodos}){
    async function deleteTodo(id){
        const res=await axios.delete('http://localhost:3000/todo',{headers:{
            token:localStorage.getItem('token')
        },data:{id:id}})
        setTodos(res.data)
    }
    return <div>
        Todos are-
        {todo.map((val)=>(<div key={val.id}>{val.title}
        <button onClick={()=>deleteTodo(val.id)}>Delete</button></div>))}
    </div>
}