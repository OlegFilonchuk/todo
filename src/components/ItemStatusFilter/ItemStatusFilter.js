import React, {Component} from 'react'

export default class ItemStatusFilter extends Component {

  state = {
    filters: 'all'
  }

  onButtonClick = (ev) => {
    this.setState({
      filters: ev.target.dataset.filter
    })
  }

  render() {



    return (
      <div className='btn-group'>
        <button className="btn btn-outline-secondary" data-filter="all" onClick={this.onButtonClick}>
          All
        </button>

        <button className="btn btn-outline-secondary" data-filter="active" onClick={this.onButtonClick}>
          Active
        </button>

        <button className="btn btn-outline-secondary" data-filter="done" onClick={this.onButtonClick}>
          Done
        </button>
      </div>
    )
  }
}