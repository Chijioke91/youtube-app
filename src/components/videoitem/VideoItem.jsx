import React, { useContext } from 'react';
import VideoContext from '../../context/VideoContext';
import './VideoItem.css';

const VideoItem = ({ video }) => {
  const { onVideoSelect } = useContext(VideoContext);

  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
