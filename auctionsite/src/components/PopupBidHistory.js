import React, { Component } from "react";
import Popup from "reactjs-popup";
import BidHistory from "./BidHistory";
import "animate.css";

export default class PopupBidHistory extends Component {
  state = {
    open: false
  };

  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          Bid history
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <i className="close" onClick={this.closeModal}>
              &times;
            </i>
            <BidHistory bidHistory={this.props.bidHistory} />
          </div>
        </Popup>
      </div>
    );
  }
}
