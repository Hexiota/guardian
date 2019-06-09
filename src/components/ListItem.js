import React, { Component } from 'react'

class ListItem extends Component {


  render() {
    return (
      <a href={this.props.url}>
        <div className='MainItem'>
          <h4>{this.props.title}</h4>
          <h5>Topic: {this.props.topic}</h5>
        </div>
      </a>
    )
  }
}
export default ListItem;