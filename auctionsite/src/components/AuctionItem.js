import React, { Component } from "react";
import moment from "moment";
import "moment-timezone";
import "moment/locale/sv";
import "animate.css";

export default class AuctionItem extends Component {
  state = {
    date: this.props.auctionItem.SlutDatum,
  }
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          date: this.props.auctionItem.SlutDatum
        }),
      60000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {

    const styles = {
      auctionItemStyle: {
        backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
        margin: "1em",
        borderRadius: ".3em",
        padding: "1.5em",
        boxShadow: "2px 2px 7px 1px rgba(0, 0, 0, 0.4)"
      },
  
      auctionPlacement: {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "1.5em"
      },
    }
    
    
    return (
      <div style={styles.auctionItemStyle}>
          <h1>{this.props.auctionItem.Titel}</h1>
        <div style={styles.auctionPlacement}>
          <p>Utropspris: {this.props.auctionItem.Utropspris}</p>
          <p>Slutdatum: {moment().to(this.state.date)}</p>
          
        </div>
      </div>
    );
  }
}
