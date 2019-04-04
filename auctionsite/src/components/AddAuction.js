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

<<<<<<< HEAD
  handleSubmit = async (e) => {
=======
  handleSubmit = async e => {
>>>>>>> master
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

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(newAuction),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
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

    const styles = {
      headerStyling: {
        marginTop: "1em",
        display: "flex",
        justifyContent: "center"
      },
  
      formStyling: {
        marginTop: "7em"
      },
    }
    
    return (
      <div style={styles.headerStyling}>
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
          <button type="submit">Skapa ny auktion</button>
        </form>
      </div>
    );
  }
}
