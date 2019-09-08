import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/youtube";
import "materialize-css/dist/css/materialize.min.css";
import "../assests/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: []
    };
  }
  onSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };
  render() {
    const { videos } = this.state;
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSubmit} />
        <VideoList videos={videos} />
      </div>
    );
  }
}

export default App;
