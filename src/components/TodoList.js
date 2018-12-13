import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos }) => {

  const list = todos.map((item) => {

    const { id, ...itemProps} = item

    return (
      <li key={id}>
        <TodoListItem {...itemProps}/>
      </li>
    )
  })

  return (
    <ul>
      {list}
    </ul>
  )
}

export default TodoList