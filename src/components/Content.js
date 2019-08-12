import React, { Component } from 'react';
import LatestList from './LatestList.js';
import SectionList from './SectionList.js';

class Content extends Component {

//API Key
//d9dccefd-910e-4f42-866b-01818026d6be

//newest
//https://content.guardianapis.com/search?api-key=d9dccefd-910e-4f42-866b-01818026d6be

//correct search fetch
//`https://content.guardianapis.com/search?q=${this.state.term}&api-key=d9dccefd-910e-4f42-866b-01818026d6be`

  constructor(props) {
    super(props);
    this.state = {
      section: '',
      error: null,
      isLoaded: false,
      items: [],
      term: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.newSearch = this.newSearch.bind(this);
  }

  callAPI = (searchTerm, section) => {
    const fetchURL = `https://content.guardianapis.com/search?${section}&show-fields=thumbnail&q=${searchTerm}&api-key=d9dccefd-910e-4f42-866b-01818026d6be`
    fetch(fetchURL)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.response.results
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  newSearch = (e) => {
    this.setState({items: []});
    console.log(this.state.section);
    e.preventDefault();
    let section = `section=${document.getElementById('SectionSelection').value}&`;
    let searchTerm = `${this.state.term}`;
    this.callAPI(searchTerm, section);
  }

  componentDidMount () {
    let section = '';
    let searchTerm = this.state.term;
    this.callAPI(searchTerm);
  }

  handleChange(event) {
    this.setState({term: event.target.value});
  }

  render () {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="Main">
          <h1> The Guardian</h1>
          <SectionList />
          <form id="searchBar">
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button onClick={this.newSearch}>search</button>
          </form>
          <LatestList items={this.state.items}/>
        </div>
      );
    }
  }
}

export default Content;
