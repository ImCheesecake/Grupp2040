import React, { Component } from "react";

export default class ItemInfo extends Component {
  render() {
    return (
      <div>   
      <h1>{this.props.auctionDetails.Titel}</h1>
      <h3>Description: {this.props.auctionDetails.Beskrivning}</h3>
      <h3>End date: {this.props.auctionDetails.SlutDatum}</h3>
      

      </div>
    );
  }
}
