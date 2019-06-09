import React from 'react';
import './App.css';
import LatestList from './components/LatestList.js';
import SearchBar from './components/SearchBar.js';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <LatestList />
    </div>
  );
}

export default App;
