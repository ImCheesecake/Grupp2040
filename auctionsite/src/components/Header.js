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
        justifyContent: "space-evenly",
<<<<<<< HEAD
        padding: ".7em 0",
        marginLeft: "35em"
=======
        padding: ".7em 0"
>>>>>>> sebastian
      }
    };

    return (
      <div style={styles.divStyle}>
<<<<<<< HEAD
        <h1 style={styles.testStyle} className="titleText" onClick={this.handleClick}>Auction Site</h1>
=======
        <h1
          style={styles.testStyle}
          className="animated rubberBand delay-5s"
          onClick={this.handleClick}
        >
          Auction Site
        </h1>
>>>>>>> sebastian
        <Search updateAuctions={this.props.updateAuctions} />
        <Popup updateArrays={this.props.updateArrays} />
      </div>
    );
  }
}
