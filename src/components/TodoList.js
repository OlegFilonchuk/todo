import React, {Component} from 'react'
import TodoListItem from './TodoListItem'

class TodoList extends Component {
  render() {
    const items = ['Learn React', 'Build Awesome App']
    return (
      <ul>
        <li><TodoListItem label={items[0]}/></li>
        <li><TodoListItem label={items[1]}/></li>
      </ul>
    )
  }
}

export default TodoList