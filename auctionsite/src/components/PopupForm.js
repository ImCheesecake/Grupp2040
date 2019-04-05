import React, { Component } from "react";
import Popup from "reactjs-popup";
import AddAuction from "./AddAuction";
import "animate.css";

export default class PopupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          Skapa ny popup-auktion
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
            <AddAuction
              updateArrays={this.props.updateArrays}
              className="animated flipInX fast"
            />
          </div>
        </Popup>
      </div>
    );
  }
}
