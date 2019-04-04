import React, { Component } from "react";
import AuctionItem from "./AuctionItem";
import "animate.css";

export default class AuctionList extends Component {
  render() {
    
    const styles = {
      auctionListStyle: {
        width: "25%",
        margin: "2em",
        cursor: "pointer",
        padding: "6em 0 0 0"
      },
    }
    
    let allAuctions = [...this.props.Auctions]
      .sort((a, b) => {
        if (a.SlutDatum === b.SlutDatum) return 0;
        return a.SlutDatum > b.SlutDatum ? 1 : -1;
      })
      .map(item => (
        <div key={item.AuktionID} className="animated flipInX fast">
          <AuctionItem auctionItem={item} setDetailView={this.props.setDetailView} />
        </div>
      ));

    return (
      <div>
        <div style={styles.auctionListStyle}>
          <div>{allAuctions}</div>
        </div>
      </div>
    );
  }
}
