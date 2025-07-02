import React from 'react'

function App() {
  const todos=[{
    title:"Go to gym",
    done:false
  },{
    title:"Eat Food",
    done:true
  }]

  const todosComp=todos.map(todo=><Todo title={todo.title} done={todo.done}></Todo>)
  return (
    <div>
      {todosComp}
    </div>
  )
}

function Todo({title,done}){
  return <div>
    {title}-{done ?"Done!":"Not done"}
  </div>
}
export default App
