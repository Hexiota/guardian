import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
        <form>
            <input placeholder="Search" />
            <button type="submit"> Search </button>
        </form>
    )
  }
}
export default SearchBar