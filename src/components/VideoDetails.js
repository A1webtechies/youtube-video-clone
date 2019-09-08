import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div className="container">Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="video-container">
        <iframe src={videoSrc} title={video.snippet.title}></iframe>
      </div>
      <div className="collection video-detail">
        <h5>{video.snippet.title}</h5>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
