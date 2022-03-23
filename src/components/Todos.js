import React, {  useState } from 'react'
const Todos = () => {
  
  const [todo,setTodo]=useState('');
  const [todos,setTodos]=useState([]); 

  
  
  
  const addTodos =(e)=> {
    if(todo){
      const newTodo  = {id: new Date().getTime().toString,
      title:todo
      }
      setTodos([...todos ,newTodo]);
      localStorage.setItem("localTodos", JSON.stringify([...todos,newTodo]))
      setTodo('');
    }
  }

  
const handleDelete =(todo)=> {
  const deleted = todos.filter((t)=> t.id !== todo.id);
  setTodos(deleted);
  localStorage.setItem("localTodos", JSON.stringify(deleted));
}

  return (
    <div className='todos'>
        <div className='input-todos'>
          <input placeholder='You forgot your work todo!!' className='todo-input' name="todo-input"  value={todo} onChange={(e)=> setTodo(e.target.value)} />
          <button onClick={addTodos}>Add TODO</button>    
        </div>
       <div className='remaining-todos'>
         You Have 
         {
           !todos.length ? "No Task"
           : todos.length === 1 ? "1 Task"
           :todos.length > 1 ? ` ${todos.length} Tasks `
           : null
         }

         Remaining
       </div>
       <div className='todo-list'>
        {
          todos.map((todo) =>(
            <div className='list' key={todo.id}>
              <p className='todo-list-item'>{todo.title}</p>
              <button className='delete' onClick={()=> handleDelete(todo)}>Delete</button>
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Todos