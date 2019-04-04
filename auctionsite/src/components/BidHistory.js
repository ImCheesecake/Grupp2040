import React, { Component } from 'react'

export default class BidHistory extends Component {
  render() {
    const styles = {
      bidHistory: {
        height: "700px",
        overflow: "auto",
        margin: "15px",
        paddingTop: "20px"
      },
      bid: {
        margin: "15px",
        paddingTop: "20px"
      }

    }

    let bidHistory = this.props.bidHistory.map(bid => {
      return(
      <div style={styles.bid} key={bid.BudID}>
        <h4>Bidder: {bid.Budgivare ? bid.Budgivare : "-"}</h4>
        <h4>Amount: {bid.Summa}</h4>
      </div>
      )
    })
    return (
      <div style={styles.bidHistory}>
        <h1>Bid history:</h1>
        {bidHistory}
      </div>
    )
  }
}
