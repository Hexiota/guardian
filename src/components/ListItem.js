import React, { Component } from 'react'

class ListItem extends Component {


  render() {
    return (
      <div className='MainItem'>
        <h1>{this.props.title}</h1>
        <a href={this.props.url}>Link</a>
      </div>
    )
  }
}
export default ListItem;