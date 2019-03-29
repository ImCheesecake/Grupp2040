import React, { Component } from "react";
import AuctionItem from "./AuctionItem";

export default class AuctionList extends Component {
  render() {
    let auctionListStyle = {
      maxHeight: "50vh",
      width: "40%",
      background: "red",
      overflow: "auto",
      marginTop: "2em"
    };
    // let activeAuctions = this.props.Auctions.filter((item) => {
    //   console.log(item.SlutDatum)
    //   console.log(new Date())
    //   console.log(moment(item.SlutDatum).toDate() > moment())
    //   if(moment(item.SlutDatum).toDate() > moment())
    //   {
    //     return (item);
    //   }
    //   return null;
    // } );
    let allAuctions = this.props.Auctions.map(item => (
      <div key={item.AuktionID}>
        <AuctionItem auctionItem={item} />
      </div>
    ));

    return <div style={auctionListStyle}>{allAuctions}</div>;
  }
}
