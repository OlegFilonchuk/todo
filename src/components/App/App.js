import React, {Component} from 'react'
import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import TodoList from '../TodoList'
import ItemAddForm from '../ItemAddForm'
import './App.css'

export default class App extends Component {

  maxId = 0

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ]
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    const newItem = {...oldItem, [propName]: !oldItem[propName]}
    return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx+1)
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      return {
        todoData: [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx+1)
        ]
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({todoData}) => {
      return {
        todoData: [
          ...todoData,
          newItem
        ]
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  render() {
    const { todoData } = this.state
    const doneCount = todoData.filter((item) => item.done).length
    const todoCount = todoData.length - doneCount

    return(
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className='top-panel d-flex'>
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addItem={this.addItem}/>
      </div>
    )
  }
}