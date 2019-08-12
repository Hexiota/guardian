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
    const fetchURL = `https://content.guardianapis.com/search?show-fields=thumbnail&${section}&q=${searchTerm}&api-key=d9dccefd-910e-4f42-866b-01818026d6be`
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
    .then(console.log(this.state.items))
  }

  getSection = () => {
    if ((document.getElementById('SectionSelection').value) === '') {
      return '';
    } else {
      return `section=${document.getElementById('SectionSelection').value}&`;
    }
  }

  newSearch = (e) => {
    this.setState({items: []});
    console.log(this.state.section);
    e.preventDefault();
    let section = this.getSection();
    console.log(section);
    let searchTerm = `${this.state.term}`;
    this.callAPI(searchTerm, section);
  }

  componentDidMount () {
    let section = '';
    let searchTerm = this.state.term;
    this.callAPI(searchTerm, section);
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
        <div className="main">
          <h1>The Guardian</h1>
          <div className="header">
            <form id="searchBar">
              <SectionList />
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <button onClick={this.newSearch}>search</button>
            </form>
          </div>
          <LatestList items={this.state.items}/>
        </div>
      );
    }
  }
}

export default Content;
