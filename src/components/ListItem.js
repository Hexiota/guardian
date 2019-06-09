import React, { Component } from 'react'

class ListItem extends Component {


  render() {
    return (
      <a href={this.props.url}>
        <div className='MainItem'>
          <h5>{this.props.title}</h5>
        </div>
      </a>
    )
  }
}
export default ListItem;