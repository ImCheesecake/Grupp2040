import React, { Component } from 'react'

export default class BidHistory extends Component {
  render() {
    let bidHistory = this.props.bidHistory.map(bid => {
      return(
      <div key={bid.BudID}>
        <h4>{bid.BudID}</h4>
        <h3>{bid.Summa}</h3>
      </div>
      )
    })
    return (
      <div>
        {bidHistory}
      </div>
    )
  }
}
