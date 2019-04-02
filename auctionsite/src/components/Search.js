import React, { Component } from "react";

export default class Search extends Component {
  state = {
    searchAuction: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.updateAuctions(this.state.searchAuction);
  };
  render() {
    let headerStyle = {
      display: "flex",
      justifyContent: "center"
    };
    return (
      <div style={headerStyle}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchAuction"
            placeholder="Search..."
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
