import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import ContentItems from './components/contentItems';

class App extends Component {
  render() {
    return (
       <div>
        <SearchBar />
        <ContentItems />
      </div>
    );
  }
}
export default App;