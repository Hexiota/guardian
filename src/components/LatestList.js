import React, { Component } from 'react';
import ListItem from './ListItem';

class LatestList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(item => (
            <li key={item.webPublicationDate}>
              <ListItem title={item.webTitle} url={item.webUrl}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LatestList;