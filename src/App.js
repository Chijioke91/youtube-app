import React from 'react';
import SearchBar from './components/searchbar/SearchBar';
import VideoList from './components/videolist/VideoList';

const App = () => (
  <div className="ui container">
    <SearchBar />
    <VideoList />
  </div>
);

export default App;
