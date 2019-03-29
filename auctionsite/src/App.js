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

  updateAuctions = (searchAuction) => {
    if(searchAuction)
    {
      let searchAuctions = this.state.AllAuctions.filter((item) => {
        if(item.Titel.includes(searchAuction))
        {
          return item
        }
        return null
      })
      this.setState({
        FilteredAuctions: searchAuctions
      })
    }
    else
    {
      this.updateArrays();
    }
    
  }

  updateArrays = () => {

      let activeAuctions = this.state.AllAuctions.filter((item) => {
        if(moment(item.SlutDatum).toDate() > moment())
        {
          return (item);
        }
        return null;
      } );

      this.setState({
        FilteredAuctions: activeAuctions        
      });
  }


  componentDidMount() {
    
    fetch("http://nackowskis.azurewebsites.net/api/Auktion/2040/")
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({          
          AllAuctions: data
        })
        this.updateArrays();

        });   
   
  }


  render() {
    return (
      <div>
      <Main />
        <Header updateAuctions = {this.updateAuctions}/>
        <AuctionList Auctions={this.state.FilteredAuctions}/>
        <DetailView />
      </div>
    );
  }
}

export default App;
