import React, { Component } from 'react'
import Popup from "reactjs-popup";
import "animate.css";
import DeleteAuction from './DeleteAuction';

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
        <button className={this.props.bidHistory.length ? null : "button red"} onClick={this.openModal} disabled={this.props.bidHistory.length ? true : false}>
          Delete auction
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
            <DeleteAuction 
            auctionDetails={this.props.auctionDetails} 
            closeModal={this.closeModal} 
            updateArrays={this.props.updateArrays} 
            hideDetailView={this.props.hideDetailView}/>
          </div>
        </Popup>
      </div>
    )
  }
}
