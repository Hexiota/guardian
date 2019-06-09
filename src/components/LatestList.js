import React, { Component } from 'react';
import ListItem from './ListItem';

class LatestList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(item => (
            <li key={item.webTitle}>
              <ListItem title={item.webTitle} url={item.webUrl} topic={item.sectionName}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LatestList;