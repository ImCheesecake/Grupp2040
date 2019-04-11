import React, { Component } from "react";

export default class DeleteAuction extends Component {
  handleDelete = async () => {
    let url =
      "https://nackowskis.azurewebsites.net/api/Auktion/2040/" +
      this.props.auctionDetails.AuktionID;

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
  };

  handleClose = () => {
    this.props.closeModal();
  };

  render() {
    const styles = {
      deleteAuction: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      buttonLayout: {
        display:"flex",
        width: "60%",
        justifyContent: "space-evenly",
        marginBottom: "1em"
      },
      
    };
    return (
      <div style={styles.deleteAuction}>
        <h3>Are you sure you want to delete this auction?</h3>
        <div style={styles.buttonLayout}>
          <button onClick={this.handleDelete} style={{ cursor: "pointer"}} className="button">
            Yes
          </button>
          <button onClick={this.handleClose} style={{ cursor: "pointer" }} className="button">
            No
          </button>
        </div>
      </div>
    );
  }
}
