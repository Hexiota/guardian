import React from 'react';
import './App.css';
import LatestList from './components/LatestList.js';
import SearchBar from './components/SearchBar.js';

function App() {

//API Key
//d9dccefd-910e-4f42-866b-01818026d6be

  return (
    <div className="App">
      <SearchBar />
      <LatestList />
    </div>
  );
}

export default App;
