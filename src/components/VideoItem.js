import React from "react";

const VideoItem = ({ video, onVideoClick }) => {
  return (
    <div
      onClick={() => {
        onVideoClick(video);
      }}
      className="collection-item  video-item"
    >
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <span className="title">{video.snippet.title}</span>
    </div>
  );
};

export default VideoItem;
