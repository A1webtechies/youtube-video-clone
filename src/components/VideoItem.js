import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="colection-item avatar video-item">
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <span className="title">{video.snippet.title}</span>
      <p>{video.snippet.channelTitle}</p>
    </div>
  );
};

export default VideoItem;
