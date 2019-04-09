import React, { Component } from "react";
import moment from 'moment'
import "moment-timezone";

export default class ItemInfo extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>   
      <h1>{this.props.auctionDetails.Titel}</h1>
      <h3>Description: {this.props.auctionDetails.Beskrivning}</h3>
      <h3>End date: {moment(this.props.auctionDetails.SlutDatum).format('ddd, MMM DD HH:mm')}</h3>
      

=======
      <div>
        <h1>{this.props.auctionDetails.Titel}</h1>
        <h3>Description: {this.props.auctionDetails.Beskrivning}</h3>
        <h3>End date: {this.props.auctionDetails.SlutDatum}</h3>
>>>>>>> sebastian
      </div>
    );
  }
}
