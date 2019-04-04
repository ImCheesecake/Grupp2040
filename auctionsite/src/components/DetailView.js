import React, { Component } from "react";
import ItemInfo from "./ItemInfo";
import "animate.css";
import Popup from "././PopupBidHistory"

export default class DetailView extends Component {

  state = {
    bidHistory: [],
    auctionDetails: {}
  }

  closeDetailView = () => {
    this.props.setDetailView(false);

  };

  async componentDidMount() {
    var budUrl = "https://nackowskis.azurewebsites.net/api/bud/2040/" + this.props.auctionId;    
    var auctionUrl = "https://nackowskis.azurewebsites.net/api/Auktion/2040/" + this.props.auctionId; 

    var bidResp = await fetch(budUrl);
    var bidHistory = await bidResp.json();

    var auctionResp = await fetch(auctionUrl);
    var auctionDetails = await auctionResp.json();

    this.setState({
      bidHistory,
      auctionDetails
    }) 
    
  }

  render() {
    const styles = {
      detailView: {
        position: "fixed",
        top: "150px",
        left: "50%",
        width: "40%",
        height: "400px",
        backgroundColor: "yellow"
      }
    };


    return (
      <div style={styles.detailView} className="detailView animated fadeIn slow">
        <i className="close" onClick={this.closeDetailView}>
          &times;
        </i>
        <div>
          
          <ItemInfo auctionDetails={this.state.auctionDetails}/>
          <Popup bidHistory={this.state.bidHistory}/>
        </div>
      </div>
    );
  }
}
