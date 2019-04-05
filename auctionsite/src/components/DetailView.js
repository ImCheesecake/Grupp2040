import React, { Component } from "react";
import ItemInfo from "./ItemInfo";
import "animate.css";
import PopupHistory from "./PopupBidHistory";
import PopupUpdate from "./PopupUpdate";
import PopupDelete from "./PopupDelete";
import BidAuction from "./BidAuction";

export default class DetailView extends Component {
  state = {
    bidHistory: [],
    auctionDetails: {},
    active: false
  };

  closeDetailView = () => {
    this.setState({ active: true });
    setTimeout(() => {
      this.props.setDetailView(false);
    }, 500);
  };

  updateDetailView = () => {
    this.componentDidMount();
  };

  async componentDidMount() {
    var budUrl =
      "https://nackowskis.azurewebsites.net/api/bud/2040/" +
      this.props.auctionId;
    var auctionUrl =
      "https://nackowskis.azurewebsites.net/api/Auktion/2040/" +
      this.props.auctionId;

    var bidResp = await fetch(budUrl);
    var bidHistory = await bidResp.json();

    var auctionResp = await fetch(auctionUrl);
    var auctionDetails = await auctionResp.json();

    await this.setState({
      bidHistory,
      auctionDetails
    });
  }

  render() {
    const styles = {
      detailView: {
        position: "fixed",
        top: "20%",
        left: "40%",
        width: "45%",
        height: "fit-content",
        display: "flex",
        justifyContent: "space-between"
      }
    };

    return (
      <div
        style={styles.detailView}
        className={
          this.state.active
            ? "detailView animated fadeOut faster divCard"
            : "detailView animated fadeIn slow divCard"
        }
      >
        <i className="close" onClick={this.closeDetailView}>
          &times;
        </i>
        <div>
          <ItemInfo auctionDetails={this.state.auctionDetails} />
          <div style={{ display: "flex" }}>
            <PopupHistory
              bidHistory={this.state.bidHistory}
              auctionDetails={this.state.auctionDetails}
            />
            <PopupUpdate
              bidHistory={this.state.bidHistory}
              auctionDetails={this.state.auctionDetails}
              updateArrays={this.props.updateArrays}
              updateDetailView={this.updateDetailView}
              style={{ marginRight: ".5em" }}
            />
            <PopupDelete
              bidHistory={this.state.bidHistory}
              auctionDetails={this.state.auctionDetails}
              updateArrays={this.props.updateArrays}
              hideDetailView={this.props.hideDetailView}
            />
          </div>
        </div>

        <BidAuction
          auctionDetails={this.state.auctionDetails}
          updateDetailView={this.updateDetailView}
          updateArrays={this.props.updateArrays}
        />
      </div>
    );
  }
}
