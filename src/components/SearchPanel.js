import React, {Component} from 'react'

class SearchPanel extends Component {
  render() {

    const searchStyle = {
      fontSize: '20px'
    }

    return (
      <input type="text" placeholder='Search' style={searchStyle} />
    )
  }
}

export default SearchPanel