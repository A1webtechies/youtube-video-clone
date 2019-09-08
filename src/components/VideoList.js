import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoClick }) => {
  const renderedList = videos.map(video => (
    <VideoItem
      video={video}
      key={video.id.videoId}
      onVideoClick={onVideoClick}
    />
  ));

  return <div className="collection">{renderedList}</div>;
};

export default VideoList;
