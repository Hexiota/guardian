import React, { Component } from 'react'

class ListItem extends Component {


  render() {
    return (
      <div className='MainItem'>
        <h3>{this.props.title}</h3>
        <a href={this.props.url}>Link</a>
      </div>
    )
  }
}
export default ListItem;