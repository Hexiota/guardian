import React, { Component } from 'react';



class Dropdown extends Component {
  render () {
    return(
      <select id="SectionSelection">
          {this.props.list.map(item => (
            <option key={item.webTitle} value={item.id}>
              {item.webTitle}
            </option>
          ))}
      </select>
    )
  }
}

export default Dropdown;
