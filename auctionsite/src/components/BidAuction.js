import React, { Component } from "react";

export default class BidAuction extends Component {
  state = {
    Utropspris: 0,
    Bud: 0,
    Budgivare: ""
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        Utropspris: this.props.auctionDetails.Utropspris,
        Bud: this.props.auctionDetails.Utropspris + 100
      });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    await this.updateAuctionPrice();
    this.props.updateDetailView();
    // if (this.state.Bud > this.state.Utropspris) {
    //   await this.updateAuctionPrice();
    //   this.props.updateDetailView();
    // } else {
    //   alert("Idiot du kan ju inte buda lägre än maxbudet fattar du väl");
    // }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateAuctionPrice = async () => {
    let url =
      "https://nackowskis.azurewebsites.net/api/Auktion/2040/" +
      this.props.auctionDetails.AuktionID;

    let budUrl =
      "https://nackowskis.azurewebsites.net/api/bud/2040/" +
      this.props.auctionDetails.AuktionID;

    let auction = {
      ...this.props.auctionDetails,
      Utropspris: this.state.Bud
    };

    let bud = {
      Summa: this.state.Bud,
      AuktionID: this.props.auctionDetails.AuktionID,
      Budgivare: this.state.Budgivare
    };

    await fetch(url, {
      method: "PUT",
      body: JSON.stringify(auction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });

    await fetch(budUrl, {
      method: "POST",
      body: JSON.stringify(bud),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });

    this.props.updateArrays();
    this.props.updateDetailView();
  };

  render() {
    const styles = {
      formPosition: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
      }
    };

    return (
      <div>
        <div>
          <h4>Current top bid: {this.state.Utropspris} kr</h4>
        </div>
        <div>
          <form onSubmit={this.handleSubmit} style={styles.formPosition}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: ".3em"
              }}
            >
              <label style={{ alignSelf: "center" }}>Bud: </label>
              <input
                name="Bud"
                type="number"
                value={this.state.Bud}
                onChange={this.handleChange}
                min={this.state.Utropspris +1}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: ".3em"
              }}
            >
              <label style={{ alignSelf: "center" }}>Budgivare: </label>
              <input
                name="Budgivare"
                type="text"
                value={this.state.Budgivare}
                onChange={this.handleChange}
                maxLength="50"
                required
              />
            </div>
            <div style={{ alignSelf: "flex-end", marginRight: "6.66667px" }}>
              <button type="submit">Bid</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
