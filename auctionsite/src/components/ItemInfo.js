import React, { Component } from "react";
import moment from "moment";
import "moment-timezone";

export default class ItemInfo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.auctionDetails.Titel}</h1>
        <h3 style={{ fontWeight: "300" }}>
          <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
          {this.props.auctionDetails.Beskrivning}
        </h3>
        <h3 style={{ fontWeight: "300" }}>
          <span style={{ fontWeight: "bold" }}>End date: </span>

          {moment(this.props.auctionDetails.SlutDatum).format(
            "ddd, MMM DD HH:mm"
          )}
        </h3>
      </div>
    );
  }
}
