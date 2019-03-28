import React, { Component } from "react";

export default class AuctionItem extends Component {
  render() {
    let allAuctions = this.props.Auctions.map(item => <div key={item.AuktionID}>{item.Titel}</div>);
    console.log(this.props.Auctions);
    return <React.Fragment>{allAuctions}</React.Fragment>;
  }
}
