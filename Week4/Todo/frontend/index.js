const backendURL="http://localhost:3000";

window.onload=fetchTodos;

async function fetchTodos(){
    const res=await axios.get(backendURL);
    const todoList=res.data;

    const container=document.getElementById("Current");
    container.innerHTML=""; //clearing old todos

    todoList.forEach(
        function(todo){
            const div=document.createElement("div");
            div.innerText=todo.title;

            const delButton=document.createElement("button");
            delButton.innerText="Delete";
            delButton.onclick=()=>deleteTodo(todo.id);

            div.appendChild(delButton);
            container.appendChild(div);
        }
    );
}

async function addTask(){
    const input=document.getElementById("Entries");
    const title=input.value;

    await axios.post(backendURL,{title});
    input.value=""
    fetchTodos();
}

async function deleteTodo(id) {
    await axios.delete(`${backendURL}/${id}`);
    fetchTodos();
}