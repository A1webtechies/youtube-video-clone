import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => (
    <VideoItem video={video} key={video.id.videoId} />
  ));

  return <div className="collection">{renderedList}</div>;
};

export default VideoList;
