import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { toggleFavoriteOffer } from '../actions/offers'

import OfferItem from '../components/OfferItem'

class Offers extends Component {

  // method to call action that will toggle the favorite status of offer
  favoriteOffer = (offerParams) => {
    this.props.toggleFavoriteOffer(offerParams)
  }

  render() {
    const favoritedArray = this.props.offers.filter((offer) => offer.favorite)
    const unFavoritedArray = this.props.offers.filter((offer) => !offer.favorite)
    return (
      <div className="container">
        <ul>
          {favoritedArray.map((offer, index) => (
            <OfferItem
              brand={offer.brand}
              key={`offer-${index}`}
              rewardAmount={offer.amount}
              rewardType={offer.type}
              id={offer.id}
              date={offer.date}
              offer={offer}
              favoriteOfferCb={this.favoriteOffer}
              favorite={offer.favorite}
            />
          ))}
          {unFavoritedArray.map((offer, index) => (
            <OfferItem
              brand={offer.brand}
              key={`offer-${index}`}
              rewardAmount={offer.amount}
              rewardType={offer.type}
              id={offer.id}
              date={offer.date}
              favoriteOfferCb={this.favoriteOffer}
              favorite={offer.favorite}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  offers: state.offers,
})

const ConnectOffers = connect(
  mapStateToProps,
  {
    toggleFavoriteOffer,
  }
)(Offers)

export default ConnectOffers
