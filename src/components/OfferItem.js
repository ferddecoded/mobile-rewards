import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faCoins,
  faArrowAltCircleRight,
  faCircle,
} from '@fortawesome/free-solid-svg-icons'

import FavoritePopUpModal from './FavoritePopUpModal'

class OfferItem extends React.Component {
  // initialize state for modal
  state = {
    showFavoriteModal: false,
  }

  // class method that toggles showing of modal
  updateShowFavoriteModal = () => this.setState({ showFavoriteModal: !this.state.showFavoriteModal })

  render() {
    const {
      brand,
      rewardAmount,
      rewardType,
      id,
      favorite,
      favoriteOfferCb,
    } = this.props
    const rewardPromoBlock = (
      <span
        style={{
          borderRadius: 5,
          padding: '5px 10px',
          position: 'absolute',
          top: 0,
          right: -5,
          color: 'goldenrod',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FontAwesomeIcon
          style={{ fontSize: 10, marginRight: 5 }}
          icon={faCircle}
        />
        {rewardAmount} per $1
      </span>
    )

    const rewardDurationBlock = (
      <span
        style={{
          position: 'absolute',
          bottom: 3,
          right: 2,
          color: '#0de47f',
          fontSize: 14,
          padding: 5,
          borderRadius: 5,
          backgroundColor: 'rgba(43, 214, 134, .1)',
        }}
      >
        {rewardType}
      </span>
    )

    const FavoriteBlock = (
      <span
        style={{
          position: 'absolute',
          top: -15,
          left: -15,
          color: 'goldenrod',
          fontSize: 20,
          padding: 5,
          borderRadius: 5,
        }}
      >
        <FontAwesomeIcon icon={faStar} />
      </span>
    )
    return (
      <div
        className="line-item"
        style={{ position: 'relative' }}
        onClick={() => this.updateShowFavoriteModal()}
      >
        <FavoritePopUpModal
          favoriteOfferCb={favoriteOfferCb}
          updateShowFavoriteModalCb={this.updateShowFavoriteModal}
          showFavoriteModal={this.state.showFavoriteModal}
          brand={brand}
          id={id}
          favorite={favorite}
        />
        {rewardPromoBlock}
        {rewardDurationBlock}
        {favorite && FavoriteBlock}
        <p
          style={{
            marginTop: 0,
            fontWeight: 700,
            textAlign: 'left',
            color: 'black',
            fontSize: 20,
          }}
        >
          Offer &emsp;
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </p>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              height: 70,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: 'goldenrod',
                fontSize: 60,
                position: 'absolute',
                left: 0,
                top: 0,
              }}
            >
              <FontAwesomeIcon icon={faCoins} />
            </span>
            <p>
              <b
                style={{ fontSize: 20, color: '#2bd686', fontWeight: 700 }}
              >
                {brand}
              </b>
            </p>
          </div>

          <hr style={{ marginTop: 20 }} />
        </div>

        <p style={{ marginBottom: 0 }}>Drop Offer</p>
      </div>
    )
  }
}

export default OfferItem
