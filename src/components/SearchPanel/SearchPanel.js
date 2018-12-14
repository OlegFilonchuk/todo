import React, {Component} from 'react'
import './SearchPanel.css'

class SearchPanel extends Component {
  render() {

    const searchStyle = {
      fontSize: '20px'
    }

    return (
        <input
          className='search-input'
          type="text"
          placeholder='Search'
          style={searchStyle}
        />
    )
  }
}

export default SearchPanel