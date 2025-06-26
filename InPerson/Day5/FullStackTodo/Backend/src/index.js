const express=require("express")
const fs=require("fs")
const app=express()
app.use(express.json())

app.get("/todos",function(req,res){
    fs.readFile("todo.json","utf8",function(_,data){
        const todos=JSON.parse(data);
        res.json(todos.todos);
    })
})

app.post("/todos",function(req,res){
    const {id,title,completed}=req.body;
    const newTodo={id,title,completed};
    fs.readFile('todo.json','utf8',function(err,data){
        const gotData=JSON.parse(data); //Gets data from the todo.json file
        gotData.todos.push(newTodo); //new todo is pushed to the data from the todo.json file
        fs.writeFile("todo.json",JSON.stringify(gotData),function(err){
        res.json(gotData);
    })
    })
})

app.get("/todos/:id",function(req,res){
    const {id}=req.params;
    fs.readFile('todo.json','utf8',function(err,data){
        const gotData=JSON.parse(data);
        const todos=gotData.todos;
        const reqTodo=todos.find(function(todo){
            return todo.id===parseInt(id);
        })
        res.json(reqTodo);
    })
})

app.delete('/todos/:id',function(req,res){
    const {id}=req.params;
    fs.readFile('todo.json','utf8',function(err,data){
        const gotData=JSON.parse(data);
        const todos=gotData.todos;
        const newTodos=gotData.todos.filter(function(todo){
            return todo.id!==parseInt(id);
        })
        gotData.todos=newTodos;
        fs.writeFile("todo.json",JSON.stringify(gotData),function(){
            res.json(gotData);
        })
    })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})