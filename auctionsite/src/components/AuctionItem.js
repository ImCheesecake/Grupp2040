import React, { Component } from "react";

export default class AuctionItem extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.auctionItem.Titel}</h1>
      </div>
    );
  }
}
