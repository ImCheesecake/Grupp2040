import React, { Component } from "react";
import moment from "moment";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/sv";
import "animate.css";

export default class AuctionItem extends Component {
  state = {
    date: this.props.auctionItem.SlutDatum
  };

  openDetailView = () => {
    var auctionId = this.props.auctionItem.AuktionID;
    this.props.setDetailView(true, auctionId);
  };

  render() {
    const styles = {
      auctionItemStyle: {
        margin: "1em",
        cursor: "pointer"
      },

      auctionPlacement: {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "1.5em"
      }
    };

    return (
      <div
        style={styles.auctionItemStyle}
        className="divCard"
        onClick={this.openDetailView}
      >
        <h1>{this.props.auctionItem.Titel}</h1>
        <div style={styles.auctionPlacement}>
          <p>Utropspris: {this.props.auctionItem.Utropspris}</p>
          <p>
            Slutdatum: <Moment interval={10000} to={this.state.date} />{" "}
          </p>
        </div>
      </div>
    );
  }
}
