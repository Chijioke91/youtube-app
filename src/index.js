import React from 'react';
import ReactDOM from 'react-dom';
import { VideoProvider } from './context/VideoContext';
import App from './App';

ReactDOM.render(
  <VideoProvider>
    <App />
  </VideoProvider>,

  document.getElementById('root')
);
