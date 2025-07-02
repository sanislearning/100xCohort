import axios from "axios"
import {useState,useEffect} from 'react'
import './dashboard.css'
function Dashboard(){
    const [todos,setTodos]=useState([])
    const [filteredTerm, setFilteredTerm] = useState([]);


    function findTodo(){
        const term=document.getElementById("searching").value.toLowerCase();
        const filteredTerm=todos.filter(str=>str.title.toLowerCase().includes(term));
        setFilteredTerm(filteredTerm)
    }

    return (
        <div className="background">
        <div className="SearchBar" style={{display:"flex"}}>
            <input type="text" placeholder="Enter your query" id="searching"></input>
            <button onClick={findTodo}>Search</button>
        </div>
        <div>
                {filteredTerm.map(todo=>(
                    <div key={todo.id}>{todo.title}</div>
                ))}
            </div>
        <Todos todos={todos} setTodos={setTodos}></Todos>
        </div>
    )
}


function Todos({todos,setTodos}){
    function fetchTodos(){
        axios.get("http://localhost:3000/todo",{
            headers:{
                token:localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setTodos(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{fetchTodos()},[])

    function addtodo(){
    let todoMain=document.getElementById("todo");
    let todo=todoMain.value;

    const newTodo={
        title:todo,
        id:Math.floor(Math.random()*1000)
    };
    setTodos([...todos,newTodo]);
    axios.post("http://localhost:3000/todo",newTodo,{
        headers:{
            token:localStorage.getItem("token"),
        },
    })
    .then(()=>{
        console.log("Todo added");
        todoMain.value="";
        fetchTodos()
    })}


    function deleteTodo(id){
    axios.delete("http://localhost:3000/todo",
        {headers:{token:localStorage.getItem('token')},
    data:{id:id}}
    ).then((res)=>{
        setTodos(res.data)
    });
    }

    return(<div>
        <div style={{display:'flex'}}>
            <input type="text" placeholder="todo" id="todo" ></input>
            <button onClick={addtodo} >Add Todo</button>
        </div>
        <div>
            {todos.map(todo=><div key={todo.id} className="tasks">{todo.title}
            <button className="delbutton" onClick={()=>deleteTodo(todo.id)}>Delete</button></div>)}
        </div>
        </div>
    )
}
export default Dashboard