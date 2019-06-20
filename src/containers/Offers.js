import React, { Component } from 'react'
import { connect } from 'react-redux'

import OfferItem from '../components/OfferItem'

@connect(state => ({
  offers: state.offers,
}))
export default class Offers extends Component {
  render() {
    return (
      <div className="container">
        <div className="line-item">
          <span>Double Click To Favorite Your Offers</span>
        </div>
        <ul>
          {this.props.offers.map((offer, index) => (
            <OfferItem
              brand={offer.brand}
              key={`offer-${index}`}
              rewardAmount={offer.amount}
              rewardType={offer.type}
              id={offer.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}
