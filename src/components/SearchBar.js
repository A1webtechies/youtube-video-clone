import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div
        className="container collection "
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <h3 className="center">Search Videos</h3>

        <form onSubmit={this.onSubmit}>
          <div className="input-field  ">
            <input
              type="text"
              value={this.state.term}
              name="term"
              onChange={this.onChange}
            />
          </div>

          <div className="center" style={{ paddingBottom: "10px" }}>
            <input
              className=" waves-effect waves-light btn"
              type="submit"
              value="search"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
