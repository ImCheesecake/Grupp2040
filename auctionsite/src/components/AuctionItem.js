import React, { Component } from "react";

export default class AuctionItem extends Component {
  render() {
    let auctionItemStyle = {
      background: "red",
      margin: "1em",
      borderRadius: ".3em",
      padding: "1.5em"
    };

    let auctionPlacement = {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "1.5em"
    };
    return (
      <div style={auctionItemStyle}>
          <h1>{this.props.auctionItem.Titel}</h1>
        <div style={auctionPlacement}>
          <p>Utropspris: {this.props.auctionItem.Utropspris}</p>
          <p>Slutdatum: {this.props.auctionItem.SlutDatum}</p>
        </div>
      </div>
    );
  }
}
