import React, { Component } from 'react'

export default class DeleteAuction extends Component {

    handleDelete = async () => {
        let url = "https://nackowskis.azurewebsites.net/api/Auktion/2040/" + this.props.auctionDetails.AuktionID;

        await fetch(url, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      });
      this.props.updateArrays();
      this.handleClose();
      this.props.hideDetailView();
    }

    handleClose = () => {
        this.props.closeModal();
    }

  render() {
    return (
      <div>
        <h3>Are you sure you want to delete this auction?</h3>
        <button onClick={this.handleDelete}>Yes</button>
        <button onClick={this.handleClose}>No</button>
      </div>
    )
  }
}
