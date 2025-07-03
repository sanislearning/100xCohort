import { useEffect,useState } from "react";
import axios from 'axios'

export function useConnection(){
    const [todo,setTodos]=useState([]);
    async function getConnection(){
        let value=await axios.get('http://localhost:3000/todo',{
            headers:{
                token:localStorage.getItem('token')
            }
        });
        return setTodos(value.data)
    }
    useEffect(()=>{getConnection()},[])
    return {todo,setTodos}
}