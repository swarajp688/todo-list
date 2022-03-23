import React from 'react'
import { useAuth } from '../hooks'

const TodoList = () => {
    const getTodos = localStorage.getItem('Todos');
    return (
    <div className='todo-list'>

    </div>
  )
}

export default TodoList