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
    console.log('---', `toggle important ${id}`)
  }

  onToggleDone = (id) => {
    console.log('---', `toggle done ${id}`)
  }

  render() {
    return(
      <div className='todo-app'>
        <AppHeader toDo={1} done={2}/>
        <div className='top-panel d-flex'>
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm addItem={this.addItem}/>
      </div>
    )
  }
}