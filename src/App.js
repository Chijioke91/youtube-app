import React from 'react';
import SearchBar from './components/searchbar/SearchBar';
import VideoDetail from './components/video-detail/VideoDetail';
import VideoList from './components/videolist/VideoList';

const App = () => {
  return (
    <div className="ui container">
      <SearchBar />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail />
          </div>
          <div className="five wide column">
            <VideoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
