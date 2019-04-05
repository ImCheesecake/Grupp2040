import React, { Component } from "react";

export default class Search extends Component {
  state = {
    searchAuction: ""
  };
  handleChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
    this.props.updateAuctions(this.state.searchAuction);
  };

  render() {
    const styles = {
      searchFormStyle: {
        borderRadius: ".8em",
        margin: "0",
      },
      headerStyle: {
        margin: "auto 0"
      }
    };
    return (
      <div style={styles.headerStyle}>
          <input
            style={styles.searchFormStyle}
            type="text"
            name="searchAuction"
            placeholder="Search..."
            onChange={this.handleChange}
          />
      </div>
    );
  }
}
