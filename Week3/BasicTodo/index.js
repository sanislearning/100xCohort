function addTask(){
    let val=document.getElementById(tasks);
    let taskbase=document.createElement("h4");
    taskbase.innerHTML(val);
    document.getElementById(tasks).appendChild(taskbase);
}