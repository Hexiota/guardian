import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
        <form>
            <input type="text" placeholder="Search" id="input"/>
            <button type="submit" onClick="this.searchFunction"> Search </button>
        </form>
    )
  }
}
export default SearchBar;