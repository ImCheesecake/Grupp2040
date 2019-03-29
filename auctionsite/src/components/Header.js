import React, { Component } from "react";
import Search from "./Search";
import AddAuction from "./AddAuction";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Search updateAuctions={this.props.updateAuctions} />
        <AddAuction addNewAuctionToList={this.props.addNewAuctionToList} />
      </div>
    );
  }
}
