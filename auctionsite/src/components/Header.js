import React, { Component } from "react";
import Search from "./Search";
// import AddAuction from "./AddAuction";

export default class Header extends Component {
  render() {
    let testStyle = {
      textAlign: "center",
      fontSize: "4em"
    };
    let divStyle = {
      background: "red",
      position: "fixed",
      top: "0",
      zIndex: "999999",
      width: "100%",
      paddingBottom: "1em"
    };
    return (
      <div style={divStyle}>
        <h1 style={testStyle}>Auction Site</h1>
        <Search updateAuctions={this.props.updateAuctions} />
      </div>
    );
  }
}
