import React from 'react'
import './TodoListItem.css'

function TodoListItem({ label, important = false }) {
  const style = {
    color: important ? 'tomato' : 'black'
  }

  return (
    <span style={style} className='todo-list-item'>
      { label }
    </span>
  )
}

export default TodoListItem