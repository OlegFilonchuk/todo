import React from 'react'
import './TodoListItem.css'

function TodoListItem({ label, important = false }) {
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  }

  return (
    <span className="todo-list-item">
      <span style={style} className='todo-list-item-label'>
        { label }
      </span>

      <button
        className="btn btn-outline-success btn-sm float-right"
        type="button"
      >
        <i className="fa fa-exclamation"/>
      </button>

      <button
        className="btn btn-outline-danger btn-sm float-right"
        type="button"
      >
        <i className="fa fa-trash-o"/>
      </button>
    </span>
  )
}

export default TodoListItem