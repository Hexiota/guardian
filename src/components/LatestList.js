import React, { Component } from 'react';
import ListItem from './ListItem';

class LatestList extends Component {

  render() {
    return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.webTitle}>
              <ListItem item={item} />
            </li>
          ))}
        </ul>
    );
  }
}

export default LatestList;