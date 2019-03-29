import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "moment-timezone";
import "moment/locale/sv";
import "react-datepicker/dist/react-datepicker.css";

export default class AddAuction extends Component {
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

  handleDateChange = e => {
    this.setState({
      SlutDatum: moment(e).toDate()
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    let url = "https://nackowskis.azurewebsites.net/api/Auktion/2040";

    e.preventDefault();

    let newAuction = {
      SlutDatum: moment(this.state.SlutDatum).format("YYYY-MM-DD HH:mm:ss"),
      StartDatum: moment().format("YYYY-MM-DD HH:mm:ss"),
      Titel: this.state.Titel,
      Beskrivning: this.state.Beskrivning,
      Utropspris: this.state.Utropspris,
      Gruppkod: 2040,
      SkapadAv: this.state.SkapadAv
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(newAuction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(function(data) {
      console.log(data.body);
    });

    this.props.addNewAuctionToList();

    this.setState({
      StartDatum: null,
      Titel: "",
      Beskrivning: "",
      SlutDatum: moment()
        .add(1, "days")
        .toDate(),
      Utropspris: 0,
      SkapadAv: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.Titel}
            type="text"
            name="Titel"
            placeholder="Titel"
            onChange={this.handleChange}
          />
          <input
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
            value={this.state.SkapadAv}
            type="text"
            name="SkapadAv"
            placeholder="Skapad av"
            onChange={this.handleChange}
          />
          <DatePicker
            selected={this.state.SlutDatum}
            onChange={this.handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="yyyy-MM-dd HH:mm:ss"
            timeCaption="time"
          />
          <button type="submit">Skapa ny auktion</button>
        </form>
      </div>
    );
  }
}
