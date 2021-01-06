import React, { useContext } from 'react';
import VideoContext from '../../context/VideoContext';

const VideoDetail = () => {
  const {
    state: { selectedVideo },
  } = useContext(VideoContext);

  return (
    selectedVideo && (
      <div>
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            frameBorder="0"
            title={selectedVideo.snippet.title}
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{selectedVideo.snippet.title}</h4>
          <p>{selectedVideo?.snippet.description}</p>
        </div>
      </div>
    )
  );
};

export default VideoDetail;
