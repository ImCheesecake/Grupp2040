import React, { Component } from "react";
import Header from "./components/Header";
import AuctionList from "./components/AuctionList";
import DetailView from "./components/DetailView";
import moment from "moment";
import "moment-timezone";
import "moment/locale/sv";

class App extends Component {
  state = {
    FilteredAuctions: [],
    AllAuctions: [],
    showDetailView: false,
    auctionId: 0
  };

  setDetailView = async (value, id) => {
    if (id !== this.state.auctionId) {      
      await this.hideDetailView()
      this.setState( {
        showDetailView: value,
        auctionId: id
      })
    }
  }

  hideDetailView = () => {
    this.setState({
      showDetailView: false
    })
  }

  addNewAuctionToList = () => {
    this.updateArrays();
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
        let activeAuctions = data.filter(item => {
          if (moment(item.SlutDatum).toDate() > moment()) {
            return item;
          }
          return null;
        });

        this.setState({
          AllAuctions: data,
          FilteredAuctions: activeAuctions
        });
      });
  };

  componentDidMount() {
    this.updateArrays();
  }

  render() {
    return (

      <div>
        <Header updateAuctions={this.updateAuctions} 
        addNewAuctionToList={this.addNewAuctionToList}
        />
        <div>
          <AuctionList
            Auctions={this.state.FilteredAuctions} 
            setDetailView={this.setDetailView}
          />
          {this.state.showDetailView ? <DetailView setDetailView={this.setDetailView} auctionId={this.state.auctionId} /> : null}
          
        </div>
      </div>
    );
  }
}

export default App;
