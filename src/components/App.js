import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/youtube";
import "materialize-css/dist/css/materialize.min.css";
import "../assests/style.css";
import VideoDetails from "./VideoDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }
  componentDidMount() {
    this.onSubmit("naats");
  }
  onSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoClick = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="row">
          <div className="col m8">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="col m4">
            <VideoList videos={videos} onVideoClick={this.onVideoClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
