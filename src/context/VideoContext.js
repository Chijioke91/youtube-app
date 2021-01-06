import React, { createContext, useState, useCallback } from 'react';
import youtube from '../apis/youtube';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [state, setState] = useState({
    videos: [],
    selectedVideo: null,
  });

  const fetchVideos = async (term) => {
    try {
      const res = await youtube.get('/search', { params: { q: term } });
      setState((prevState) => ({
        ...prevState,
        videos: res.data.items,
        selectedVideo: res.data.items[0],
      }));
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const onVideoSelect = useCallback(
    (video) => setState({ ...state, selectedVideo: video }),
    [state]
  );

  return (
    <VideoContext.Provider value={{ fetchVideos, onVideoSelect, state }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
