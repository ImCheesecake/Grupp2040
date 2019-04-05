import React, { Component } from "react";
import Popup from "reactjs-popup";
import BidHistory from "./BidHistory";
import "animate.css";
import moment from "moment";
import "moment-timezone";
import "moment/locale/sv";

export default class PopupBidHistory extends Component {
  state = {
    open: false,
    date: moment().toDate()
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

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        date: moment(this.props.auctionDetails.SlutDatum).toDate()
      });
    }
  }

  render() {
    return (
      <div>
        <button
          className={
            this.props.bidHistory.length === 0 || this.state.date < moment()
              ? null
              : "button"
          }
          onClick={this.openModal}
          disabled={
            this.props.bidHistory.length === 0 || this.state.date < moment()
              ? true
              : false
          }
          style={
            this.props.bidHistory.length === 0 || this.state.date < moment()
              ? null
              : { cursor: "pointer" }
          }
        >
          Bid history
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
            <BidHistory bidHistory={this.props.bidHistory} />
          </div>
        </Popup>
      </div>
    );
  }
}
