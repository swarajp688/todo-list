import React, { useState } from 'react'
import { useAuth } from '../hooks';

const Todos = () => {
  const auth = useAuth();
  const [todo,setTodo]=useState('');
  const handleChange = (e)=>{
      setTodo(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    auth.addTodo(todo);
    setTodo('');
  }
  return (
    <div className='todos'>
        <div className='input-todos'>
          <form className='todo-form' onSubmit={handleSubmit}>
          <textarea name="todo-content"  cols="30" rows="10" onChange={handleChange}></textarea>
            <button>Add TODO</button>
        </form>
            
        </div>

        {/* <TodoList ></TodoList> */}
    </div>
  )
}

export default Todos