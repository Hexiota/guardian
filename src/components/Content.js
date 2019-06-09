import React, { Component } from 'react'
import LatestList from './LatestList.js';

class Content extends Component {

//API Key
//d9dccefd-910e-4f42-866b-01818026d6be

  constructor(props) {
    super(props);
    this.state = {
      term: "search"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = document.getElementById('input').value;
    this.setState ({
      term: searchTerm
    })
  }

  render () {
    return (
      <div id="Main">
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="input" className="input" placeholder="Search..." />
          <input type="submit" value="Submit" />
        </form>
        <LatestList searchTerm={this.state.term}/>
      </div>
    );
  }
}

export default Content;
