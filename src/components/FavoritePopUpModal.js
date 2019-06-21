import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo-green.png'

const FavoritePopUpModal = ({
  favoriteOfferCb,
  updateShowFavoriteModalCb,
  showFavoriteModal,
  brand,
  id,
  favorite,
}) => {
  // text that asks if offer will be favorited
  const favoriteText = <p>Would you like to favorite the following offer?</p>

  // text that asks if offer will be unfavorited
  const unfavoriteText = <p>Would you like to unfavorite the following?</p>

  // button that has event handler that calls action to favorite offer
  const favoriteButton = <button
    onClick={() => favoriteOfferCb({ id, date: Date.now() })}
    style={{
      margin: 20,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#2bd686',
      border: 'none',
      color: '#fff',
      width: '100%',
      cursor: 'pointer',
    }}>
    {favorite ? 'unfavorite' : 'favorite'}
  </button>

  const favoriteStatement = favorite ? unfavoriteText : favoriteText
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'fixed',
        display: showFavoriteModal ? 'block' : 'none',
        zIndex: 9,
      }}
    >
      <div
        style={{
          maxWidth: 450,
          height: 200,
          background: '#fff',
          margin: '0 auto',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '20px 30px',
          borderRadius: 10,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <span
          style={{ top: 5, right: 5, position: 'absolute', fontSize: 20, cursor: 'pointer' }}
          onClick={() => updateShowFavoriteModalCb()}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </span>
        <img height={40} src={logo} />
        {favoriteStatement}
        <span
          style={{
            display: 'block',
            margin: 10,
            borderTop: '1px solid gainsboro',
            padding: 10,
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          {brand}
        </span>
        {favoriteButton}
      </div>
    </div>
  )
}

export default FavoritePopUpModal
