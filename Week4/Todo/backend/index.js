const express=require("express");
const app=express();
const port=3000;
app.use(express.json());
let todos=[];
const cors=require('cors');
app.use(cors());

app.post('/',function(req,res){
    // create a random id for the todo
    // extract the todo title from the body
    const title=req.body.title;
    const newTodo={
        id:Date.now(),
        title:title
    };
    todos.push(newTodo);
    res.status(201).send(newTodo);
})

app.delete('/:id',function(req,res){
    // extract the todo id
    // remove the todo from here
    const id=parseInt(req.params.id);
    const index=todos.findIndex(
        function(todo){
            return todo.id===id;
        }
    );
    todos.splice(index,1); //removes the item from the index
    //array.splice(startIndex,deleteCount)
    res.send({success:true});
})

app.get('/',function(req,res){
    // returns all the todos
    res.send(todos);
})

app.listen(port,function(){
    console.log("Todo app is online");
});