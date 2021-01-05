import React, { createContext, useState } from 'react';
import youtube from '../apis/youtube';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async (term) => {
    try {
      const res = await youtube.get('/search', { params: { q: term } });
      setVideos(res.data.items);
    } catch (e) {
      throw new Error(e.message);
    }
  };

  return (
    <VideoContext.Provider value={{ fetchVideos, videos }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
