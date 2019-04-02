import React, { Component } from "react";
import Header from "./components/Header";
import AuctionList from "./components/AuctionList";
import DetailView from "./components/DetailView";
import Main from "./components/Main";
import moment from "moment";
import "moment-timezone";
import "moment/locale/sv";

class App extends Component {
  state = {
    FilteredAuctions: [],
    AllAuctions: []
  };

  addNewAuctionToList = () => {
    console.log("logging this.state.FilteredAuctions from addNewAuctionToList")
    console.log(this.state.FilteredAuctions)
    this.updateArrays();

    // let newFilteredAuctions = [...this.state.FilteredAuctions, auction]
    // console.log(newFilteredAuctions)
    // this.setState({
    //   FilteredAuctions: newFilteredAuctions
    // })
  };

  updateAuctions = searchAuction => {
    if (searchAuction) {
      let searchAuctions = this.state.AllAuctions.filter(item => {
        if (item.Titel.includes(searchAuction)) {
          return item;
        }
        return null;
      });
      this.setState({
        FilteredAuctions: searchAuctions
      });
    } else {
      this.updateArrays();
    }
  };

  updateArrays = () => {
    fetch("http://nackowskis.azurewebsites.net/api/Auktion/2040/")
    .then(resp => resp.json())
    .then(data => {
      let activeAuctions = data.filter((item) => {
        if(moment(item.SlutDatum).toDate() > moment())
        {
          return (item);
        }
        return null;
      });

      console.log("Logging activeAuctions from updateArrays")
      console.log(activeAuctions)

      this.setState({          
        AllAuctions: data,
        FilteredAuctions: activeAuctions
      })    
    }); 
  }


  componentDidMount() {
    this.updateArrays();
  }

  render() {
    return (
      <div>
        <Main />
        <Header
          updateAuctions={this.updateAuctions}
          addNewAuctionToList={this.addNewAuctionToList}
        />
        <AuctionList Auctions={this.state.FilteredAuctions} />
        <DetailView />
      </div>
    );
  }
}

export default App;
