import React, { Component } from 'react'
import Popup from "reactjs-popup";
import "animate.css";
import UpdateAuction from './UpdateAuction';

export default class PopupForm extends Component {
  state = {
    open: false
  }  

  openModal = () => {
    this.setState({open: true})
  }
  closeModal = () => {
    this.setState({open: false})
  }
  
  render() {
    return (
      <div>
        <button className={this.props.bidHistory.length ? null : "button"} onClick={this.openModal} disabled={this.props.bidHistory.length ? true : false}>
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
            <UpdateAuction bidHistory={this.props.bidHistory} auctionDetails={this.props.auctionDetails} updateArrays={this.props.updateArrays} updateDetailView={this.props.updateDetailView} className="animated flipInX fast" />
          </div>
        </Popup>
      </div>
    )
  }
}
