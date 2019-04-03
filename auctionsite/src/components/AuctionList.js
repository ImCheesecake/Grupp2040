import React, { Component } from "react";
import AuctionItem from "./AuctionItem";
// import AddAuction from "./AddAuction";
import "animate.css";

export default class AuctionList extends Component {
  render() {
    
    const styles = {
      auctionListStyle: {
        width: "25%",
        margin: "2em",
        cursor: "pointer"
      },
    }
    

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
    let allAuctions = [...this.props.Auctions]
      .sort((a, b) => {
        if (a.SlutDatum === b.SlutDatum) return 0;
        return a.SlutDatum > b.SlutDatum ? 1 : -1;
      })
      .map(item => (
        <div key={item.AuktionID} className="animated flipInX fast">
          <AuctionItem auctionItem={item} />
        </div>
      ));

    return (
      <div>
        {/* <AddAuction  /> */}

        <div style={styles.auctionListStyle}>
          <div>{allAuctions}</div>
        </div>
      </div>
    );
  }
}
