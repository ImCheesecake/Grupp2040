import React, { Component } from "react";

export default class Main extends Component {
  render() {
    let testStyle = {
      textAlign: "center",
      fontFamily: "Montserrat",
      fontSize: "4em"
    };

    return (
      <React.Fragment>
        <h1 style={testStyle}>Auction Site</h1>
      </React.Fragment>
    );
  }
}
