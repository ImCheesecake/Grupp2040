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

    let searchFormStyle = {
      borderRadius: ".8em 0 0 .8em",
      margin: "0"
    }
    let buttonStyle = {
      borderRadius: "0 .8em .8em 0",
      padding: "0 .8em",
    }

    

    let headerStyle = {
      display: "flex",
      justifyContent: "center"
    };
    return (
      <div style={headerStyle}>
        <form onSubmit={this.handleSubmit}>
          <input
            style={searchFormStyle}
            type="text"
            name="searchAuction"
            placeholder="Search..."
            onChange={this.handleChange}
          />
          <button style={buttonStyle} type="submit">Search</button>
        </form>
      </div>
    );
  }
}
