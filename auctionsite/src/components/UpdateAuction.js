import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "moment-timezone";
import "moment/locale/sv";
import "react-datepicker/dist/react-datepicker.css";

export default class UpdateAuction extends Component {
  state = {
    StartDatum: null,
    Titel: "",
    Beskrivning: "",
    SlutDatum: moment()
      .add(1, "days")
      .toDate(),
    Utropspris: 0,
    SkapadAv: ""
  };

  componentDidMount() {
    console.log(this.props);
    this.setState({
      StartDatum: moment(this.props.auctionDetails.StartDatum).toDate(),
      Titel: this.props.auctionDetails.Titel,
      Beskrivning: this.props.auctionDetails.Beskrivning,
      SlutDatum: moment(this.props.auctionDetails.SlutDatum).toDate(),
      Utropspris: this.props.auctionDetails.Utropspris,
      SkapadAv: this.props.auctionDetails.SkapadAv
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDateChange = e => {
    this.setState({
      SlutDatum: moment(e).toDate()
    });
  };

  handleSubmit = async e => {
    let url =
      "https://nackowskis.azurewebsites.net/api/Auktion/2040/" +
      this.props.auctionDetails.AuktionID;
    e.preventDefault();

    let auction = {
      AuktionID: this.props.auctionDetails.AuktionID,
      SlutDatum: moment(this.state.SlutDatum).format("YYYY-MM-DD HH:mm:ss"),
      StartDatum: moment(this.state.StartDatum).format("YYYY-MM-DD HH:mm:ss"),
      Titel: this.state.Titel,
      Beskrivning: this.state.Beskrivning,
      Utropspris: this.state.Utropspris,
      Gruppkod: 2040,
      SkapadAv: this.state.SkapadAv
    };

    await fetch(url, {
      method: "PUT",
      body: JSON.stringify(auction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });

    this.props.updateArrays();
  };

  render() {
    const styles = {
      headerStyling: {
        marginTop: "1em",
        display: "flex",
        justifyContent: "center"
      },

      formStyling: {
        marginTop: "7em"
      }
    };
    return (
      <div style={styles.headerStyling}>
        <h3>Update Auction</h3>
        <form onSubmit={this.handleSubmit} style={styles.formStyling}>
          <input
            maxLength="50"
            value={this.state.Titel}
            type="text"
            name="Titel"
            placeholder="Titel"
            onChange={this.handleChange}
          />

          <input
            maxLength="250"
            value={this.state.Beskrivning}
            type="text"
            name="Beskrivning"
            placeholder="Beskrivning"
            onChange={this.handleChange}
          />
          <input
            value={this.state.Utropspris}
            type="number"
            name="Utropspris"
            placeholder="Utropspris"
            onChange={this.handleChange}
          />
          <input
            maxLength="50"
            value={this.state.SkapadAv}
            type="text"
            name="SkapadAv"
            placeholder="Skapad av"
            onChange={this.handleChange}
          />
          <DatePicker
            selected={this.state.SlutDatum}
            onChange={this.handleDateChange}
            minDate={this.state.StartDatum}
            maxDate={moment()
              .add(30, "days")
              .toDate()}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy-MM-dd HH:mm"
            timeCaption="time"
          />
          <button type="submit">Uppdatera auction</button>
        </form>
      </div>
    );
  }
}
