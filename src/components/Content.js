import React, { Component } from 'react'
import LatestList from './LatestList.js';

class Content extends Component {

//API Key
//d9dccefd-910e-4f42-866b-01818026d6be

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      term: 'search'
    };
  }

  callAPI = () => {
    const fetchURL = `https://content.guardianapis.com/${this.state.term}?api-key=d9dccefd-910e-4f42-866b-01818026d6be`

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

  componentDidMount () {
    this.callAPI();
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
          <LatestList items={this.state.items}/>
        </div>
      );
    }
  }
}

export default Content;
