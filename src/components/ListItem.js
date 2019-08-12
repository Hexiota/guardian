import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    console.log(this.props.item)
    if (typeof this.props.item.fields.thumbnail === 'undefined') {
      return (
        <a href={this.props.item.webUrl}>
          <div className='MainItem'>
            <div className='ImgDiv'>
            </div>
            <div className='TextContent'>
              <h5>{this.props.item.sectionName}</h5>
              <h4>{this.props.item.webTitle}</h4>
            </div>
          </div>
        </a>
      )
    } else {
      return (
        <a href={this.props.item.webUrl}>
          <div className='MainItem'>
            <div className='ImgDiv'>
             <img src={this.props.item.fields.thumbnail} />
            </div>
            <div className='TextContent'>
              <h5>{this.props.item.sectionName}</h5>
              <h4>{this.props.item.webTitle}</h4>
            </div>
          </div>
        </a>
      )
    } 
  }
}
export default ListItem;