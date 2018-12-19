import React, {Component} from 'react'
import './SearchPanel.css'

class SearchPanel extends Component {

  state = {
    value: ''
  }

  onInputChange = (ev) => {
    this.setState({value: ev.target.value})
    this.props.onSearchChange(this.state.value)
  }

  render() {
    return (
        <input
          className='search-input form-control'
          type="text"
          value={this.state.value}
          onChange={this.onInputChange}
          placeholder='Search'
        />
    )
  }
}

export default SearchPanel