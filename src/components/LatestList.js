import React, { Component } from 'react';
import ListItem from './ListItem';

class LatestList extends Component {

  render() {
    return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.webTitle}>
              <ListItem
                title={item.webTitle}
                url={item.webUrl}
                image={item.fields.thumbnail}
                topic={item.sectionName}
              />
            </li>
          ))}
        </ul>
    );
  }
}

export default LatestList;