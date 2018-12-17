import React, { Component } from 'react'
import './ItemAddForm.css'

export default class ItemAddForm extends Component {

  state = {
    value: ''
  }

  onInputChange = (ev) => {
    this.setState({value: ev.currentTarget.value})
  }

  submitForm = () => {
    this.props.addItem(this.state.value)
    this.setState({value: ''})
  }

  render() {
    return (
      <div className="item-add-form">
        <input
          className='item-add-input'
          type="text"
          value={this.state.value}
          onChange={this.onInputChange}
        />
        <button
          className='btn btn-outline-secondary'
          onClick={this.submitForm}
        >
          Add Item
        </button>
      </div>
    )
  }
}