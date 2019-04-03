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

    const styles = {
      searchFormStyle: {
        borderRadius: ".8em 0 0 .8em",
        margin: "0",
        borderRight: ".3px solid"
      },
      buttonStyle: {
        borderRadius: "0 .8em .8em 0",
        padding: "0 .8em",
      },
      headerStyle: {
        margin: "auto 0"
    },
    
    };
    return (
      <div style={styles.headerStyle}>
        <form onSubmit={this.handleSubmit}>
          <input
            style={styles.searchFormStyle}
            type="text"
            name="searchAuction"
            placeholder="Search..."
            onChange={this.handleChange}
          />
          <button style={styles.buttonStyle} type="submit">Search</button>
        </form>
      </div>
    );
  }
}
