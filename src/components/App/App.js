import React, {Component} from 'react'
import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import TodoList from '../TodoList'
import ItemAddForm from '../ItemAddForm'
import './App.css'

export default class App extends Component {

  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make Awesome App', important: true, id: 2},
      {label: 'Have a lunch', important: false, id: 3}
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
    const maxId = Math.max(...this.state.todoData.map((item) => item.id))
    this.setState(({todoData}) => {
      return {
        todoData: [
          ...todoData,
          {label: text, important: false, id: maxId+1}
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