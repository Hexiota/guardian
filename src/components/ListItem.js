import React, { Component } from 'react';
import { logicalExpression } from '@babel/types';

class ListItem extends Component {

  componentDidMount () {
    if (this.props.item.fields) {
      console.log('thumbnail exists');
    }
  }

  render() {
    if (this.props.item.fields) {
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
    } else {
      return (
        <a href={this.props.item.webUrl}>
          <div className='MainItem'>
            <div className='ImgDiv'>
              <img src={require('../img/fallback-logo.png')} />
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