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

  handleSubmit = async e => {
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

    this.props.updateArrays();

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
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      },
      inputStyling: {
        margin: "10px 0 0 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      buttonStyling: {
        margin: "20px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    };

    return (
      <div style={styles.headerStyling}>
        <h2>Create auction</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div style={styles.inputStyling}>
              <label htmlFor="Titel">Title: </label>
              <input
                maxLength="50"
                value={this.state.Titel}
                type="text"
                name="Titel"
                placeholder="Title"
                onChange={this.handleChange}
                required
              />
            </div>
            <div style={styles.inputStyling}>
              <label htmlFor="Beskrivning">Description: </label>
              <textarea
                maxLength="250"
                style={{ resize: "none", height: "10em" }}
                value={this.state.Beskrivning}
                type="text"
                name="Beskrivning"
                placeholder="Description"
                onChange={this.handleChange}
                required
              />
            </div>
            <div style={styles.inputStyling}>
              <label htmlFor="Utropspris">Starting price: </label>
              <input
                value={this.state.Utropspris}
                type="number"
                name="Utropspris"
                placeholder="Starting price"
                onChange={this.handleChange}
                min="0"
              />
            </div>
            <div style={styles.inputStyling}>
              <label htmlFor="SkapadAv">Created by: </label>
              <input
                maxLength="50"
                value={this.state.SkapadAv}
                type="text"
                name="SkapadAv"
                placeholder="Created by"
                onChange={this.handleChange}
                required
              />
            </div>
            <div style={styles.inputStyling}>
              <label>End date: </label>
              <DatePicker
                selected={this.state.SlutDatum}
                onChange={this.handleDateChange}
                minDate={moment().toDate()}
                maxDate={moment()
                  .add(30, "days")
                  .toDate()}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="yyyy-MM-dd HH:mm"
                timeCaption="time"
              />
            </div>
            <div style={styles.buttonStyling}>
              <button type="submit">Create auction</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
