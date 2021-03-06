import React, { Component } from "react";
import Search from "./Search";
import "animate.css";
import Popup from "./PopupForm";

export default class Header extends Component {
  handleClick = async () => {
    window.scrollTo(0, 0);
    this.props.updateArrays();
    this.props.hideDetailView();
  };
  render() {
    const styles = {
      testStyle: {
        textAlign: "center",
        fontSize: "4em"
      },
      divStyle: {
        position: "fixed",
        top: "0",
        width: "75%",
        display: "flex",
        justifyContent: "space-around",
        padding: ".7em 0",
        zIndex: "99999999",
        right: "0"
      }
    };

    return (
      <div style={styles.divStyle}>
        <h1 style={styles.testStyle} className="titleText" onClick={this.handleClick}>Beach Auctions</h1>
        <Search updateAuctions={this.props.updateAuctions} />
        <Popup updateArrays={this.props.updateArrays} />
      </div>
    );
  }
}
