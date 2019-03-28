import React, { Component } from "react";
import AuctionItem from "./AuctionItem";

export default class AuctionList extends Component {
  render() {
    return (
      <div>
        <AuctionItem Auctions={this.props.Auctions} />
      </div>
    );
  }
}
