import React, { Component } from "react";

export default class AuctionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AuktionID: null,
      Utropspris: null,
      Titel: null,
      SkapadAv: null,
    };
  }

  componentDidMount() {
    fetch("http://nackowskis.azurewebsites.net/api/Auktion/2040/")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          AuktionID: data[0].AuktionID,
          Titel: data[0].Titel,
          Utropspris: data[0].Utropspris,
          SkapadAv: data[0].SkapadAv,
        });
      });
    console.log("mounted");
  }

  render() {
    return <React.Fragment>
      <h1>{this.state.Titel}</h1>
      <p>{this.state.Utropspris}</p>
      <p>{this.state.SkapadAv}</p>
    </React.Fragment>;
  }
}
