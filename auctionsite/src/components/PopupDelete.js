import React, { Component } from "react";
import Popup from "reactjs-popup";
import "animate.css";
import DeleteAuction from "./DeleteAuction";

export default class PopupForm extends Component {
  state = {
    open: false,
    active: false
  };

  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ active: true });
    setTimeout(() => {
      this.setState({ open: false, active: false });
    }, 500);
  };

  render() {
    return (
      <div>
        <button
          className={this.props.bidHistory.length ? null : "button red"}
          onClick={this.openModal}
          disabled={this.props.bidHistory.length ? true : false}
          style={this.props.bidHistory.length ? null: {cursor: "pointer"}}
          
        >
          Delete auction
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
          className={
            this.state.active
              ? "animated fadeOut faster"
              : "animated fadeIn faster"
          }
        >
          <div className="modal">
            <i className="close" onClick={this.closeModal}>
              &times;
            </i>
            <DeleteAuction
              auctionDetails={this.props.auctionDetails}
              closeModal={this.closeModal}
              updateArrays={this.props.updateArrays}
              hideDetailView={this.props.hideDetailView}
              className="animated fadeIn faster"
            />
          </div>
        </Popup>
      </div>
    );
  }
}
