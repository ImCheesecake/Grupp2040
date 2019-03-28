import React, { Component } from "react";

export default class AuctionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Auctions: []
    };
  }

  componentDidMount() {
    fetch("http://nackowskis.azurewebsites.net/api/Auktion/2040/")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          Auctions: data
        });
      });
    console.log("mounted");
  }

  render() {
    let auctionList = this.state.Auctions.map(item => {
      return <div>{item.Titel}</div>;
    });

    return (
      <React.Fragment>
        <h1>{auctionList}</h1>
      </React.Fragment>
    );
  }
}
