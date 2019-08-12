import React, { Component } from 'react';
import Dropdown from './Dropdown.js';

class SectionList extends Component {

//API Key
//d9dccefd-910e-4f42-866b-01818026d6be

//newest
//https://content.guardianapis.com/search?api-key=d9dccefd-910e-4f42-866b-01818026d6be

//correct search fetch
//`https://content.guardianapis.com/search?q=${this.state.term}&api-key=d9dccefd-910e-4f42-866b-01818026d6be`

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      sections: [],
      term: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.newSearch = this.newSearch.bind(this);
  }

  callAPI = () => {
    const fetchURL = `https://content.guardianapis.com/sections?&api-url&api-key=d9dccefd-910e-4f42-866b-01818026d6be`

    fetch(fetchURL)

    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);

        this.setState({
          isLoaded: true,
          sections: result.response.results
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
    e.preventDefault();
    let searchTerm = `${this.state.term}`;
    this.callAPI(searchTerm);
  }

  componentDidMount () {
    this.callAPI();
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
        <Dropdown list={this.state.sections} />
      );
    }
  }
}

export default SectionList;
