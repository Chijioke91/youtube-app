import React, { useContext } from 'react';
import VideoContext from '../../context/VideoContext';

const VideoList = () => {
  const { videos } = useContext(VideoContext);

  return <div>{videos.length}</div>;
};

export default VideoList;
