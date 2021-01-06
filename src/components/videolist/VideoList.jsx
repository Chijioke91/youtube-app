import React, { useContext } from 'react';
import VideoContext from '../../context/VideoContext';
import VideoItem from '../videoitem/VideoItem';

const VideoList = () => {
  const { state } = useContext(VideoContext);

  const { videos } = state;

  const renderedList = videos?.map((video, idx) => (
    <VideoItem video={video} key={idx} />
  ));

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
