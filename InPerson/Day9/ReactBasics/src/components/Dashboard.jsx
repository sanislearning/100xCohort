import './dashboard.css'
import { useConnection } from "./hooks/useConnection"
import { CreateTodo } from "./createTodo"
import {Todos} from "./UpdateTodos"

function Dashboard(){
    const {todo,setTodos}=useConnection()
    return(
    <div>
        <CreateTodo todo={todo} setTodos={setTodos}/>
        <Todos todo={todo} setTodos={setTodos}></Todos>
    </div>
    )
}




export default Dashboard