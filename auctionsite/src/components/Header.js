import React, { Component } from "react";
import Search from "./Search";
import "animate.css";
import Popup from "./PopupForm";

export default class Header extends Component {

  
  

  render() {

    const styles = {
       testStyle: {
        textAlign: "center",
        fontSize: "4em"
      },
       divStyle: {
        background: "red",
        position: "fixed",
        top: "0",
        zIndex: "999999",
        width: "100%",
        boxShadow: "0 .3em .8em -3px rgba(0, 0, 0, .8)",
        borderRadius: "0 0 .5em .5em",
        display: "flex",
        justifyContent: "space-evenly",
        padding: ".7em 0"
      },
    }

    return (
      <div style={styles.divStyle}>
        <h1 style={styles.testStyle} className="animated rubberBand delay-5s">Auction Site</h1>
        <Search updateAuctions={this.props.updateAuctions} />
        <Popup addNewAuctionToList={this.props.addNewAuctionToList}/>
      </div>
    );
  }
}
