import React, { Component } from "react";
import Popup from "reactjs-popup";
import "animate.css";
import UpdateAuction from "./UpdateAuction";
import moment from "moment";
import "moment-timezone";
import "moment/locale/sv";

export default class PopupForm extends Component {
  state = {
    open: false,
    date: moment().toDate()
  };

  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        date: moment(this.props.auctionDetails.SlutDatum).toDate()
      });
    }
  }

  render() {
    console.log(this.state.date);
    return (
      <div>
        <button
          className={this.props.bidHistory.length ? null : "button"}
          onClick={this.openModal}
          disabled={this.props.bidHistory.length ? true : false}
          style={this.props.bidHistory.length ? null : { cursor: "pointer" }}
        >
          Uppdatera auktion
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
          className="animated fadeIn faster"
        >
          <div className="modal">
            <i className="close" onClick={this.closeModal}>
              &times;
            </i>
            <UpdateAuction
              bidHistory={this.props.bidHistory}
              auctionDetails={this.props.auctionDetails}
              updateArrays={this.props.updateArrays}
              className="animated flipInX fast"
              updateDetailView={this.props.updateDetailView}
              closeModal={this.closeModal}
            />
          </div>
        </Popup>
      </div>
    );
  }
}
