import React, {Component} from 'react'
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component {

  state = {
    filter: 'all'
  }

  onButtonClick = ({target}) => {
    this.setState({
      filter: target.dataset.filter
    })
    this.props.onFilterChange(target.dataset.filter)

    document.querySelectorAll('[data-active]').forEach((item) => {
      item.dataset.active = 'false'
    })

    target.dataset.active = 'true'
  }

  render() {
    return (
      <div className='btn-group'>
        <button
          className="btn btn-outline-secondary"
          data-filter="all"
          data-active="false"
          onClick={this.onButtonClick}
        >
          All
        </button>

        <button
          className="btn btn-outline-secondary"
          data-filter="active"
          data-active="false"
          onClick={this.onButtonClick}
        >
          Active
        </button>

        <button
          className="btn
          btn-outline-secondary"
          data-filter="done"
          data-active="false"
          onClick={this.onButtonClick}
        >
          Done
        </button>
      </div>
    )
  }
}