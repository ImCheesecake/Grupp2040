import React, { Component } from "react";
import Popup from "reactjs-popup";
import AddAuction from "./AddAuction";
import "animate.css";

export default class PopupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      active: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ active: true });
    setTimeout(() => {
      this.setState({ open: false, active: false });
    }, 500);
  }

  render() {
    const styles = {
      headerStyle: {
        margin: "auto 0"
      }
    };
    return (
      <div style={styles.headerStyle}>
        <button
          className="button"
          onClick={this.openModal}
          style={{ cursor: "pointer" }}
        >
          Create auction
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
