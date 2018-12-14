import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const TodoList = ({ todos }) => {

  const list = todos.map((item) => {

    const { id, ...itemProps} = item

    return (
      <li key={id} className='list-group-item'>
        <TodoListItem {...itemProps}/>
      </li>
    )
  })

  return (
    <ul className='list-group todo-list'>
      {list}
    </ul>
  )
}

export default TodoList