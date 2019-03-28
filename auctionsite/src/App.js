import React, { Component } from 'react';
import Header from './components/Header';
import AuctionList from './components/AuctionList';
import DetailView from './components/DetailView';

class App extends Component {
  render() {
    return (
      <div >
      <Header />
      <AuctionList />
      <DetailView />

      </div>
    );
  }
}

export default App;
