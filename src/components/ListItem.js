import React, { Component } from 'react';

class ListItem extends Component {


  render() {
    return (
      <a href={this.props.url}>
        <div className='MainItem'>
          <div className='ImgDiv'>
            <img src={this.props.image} />
          </div>
          <div className='TextContent'>
            <h5>{this.props.topic}</h5>
            <h4>{this.props.title}</h4>
          </div>
        </div>
      </a>
    )
  }
}
export default ListItem;