import React, { Component } from "react";
import Header from "./components/Header";
import AuctionList from "./components/AuctionList";
import DetailView from "./components/DetailView";
import Main from "./components/Main";

class App extends Component {
  state = {
    Auctions: []
  };

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
    return (
      <div>
      <Main />
        <Header />
        <AuctionList Auctions={this.state.Auctions}/>
        <DetailView />
      </div>
    );
  }
}

export default App;
