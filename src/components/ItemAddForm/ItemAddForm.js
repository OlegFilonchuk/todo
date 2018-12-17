import React, { Component } from 'react'
import './ItemAddForm.css'

export default class ItemAddForm extends Component {

  state = {
    value: ''
  }

  onInputChange = (ev) => {
    this.setState({value: ev.target.value})
  }

  submitForm = (ev) => {
    ev.preventDefault()
    this.props.addItem(this.state.value)
    this.setState({value: ''})
  }

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.submitForm} >
        <input
          className='item-add-input form-control'
          type="text"
          value={this.state.value}
          onChange={this.onInputChange}
          placeholder='What needs to be done...'
          autoFocus
        />
        <button
          className='btn btn-outline-secondary'
        >
          Add Item
        </button>
      </form>
    )
  }
}