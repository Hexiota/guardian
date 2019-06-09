import React, { Component } from 'react';
import ListItem from './ListItem';

class LatestList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount () {
    fetch("https://content.guardianapis.com/search?api-key=d9dccefd-910e-4f42-866b-01818026d6be")

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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.webPublicationDate}>
                <ListItem title={item.webTitle} url={item.webUrl}/>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default LatestList;