import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import logo from '../images/logo-green.png'

const PopUpModal = ({
  updateRedeemedRewardCb,
  updateShowRedeemModalCb,
  showRedeemModal,
  brand,
  cost,
  totalPoints,
  id,
  redeemed,
}) => {
  const pointsSpan = <span>{`You have attained ${totalPoints} out of ${cost} points`}</span>
  const redeemButton = <button
    onClick={() => {
      const date = moment().valueOf()
      updateRedeemedRewardCb(id, date)
    }}
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
    Redeem
  </button>
  const insufficientPointsText = <p>Looks like you're still short some points.</p>
  const redeemedText = <p>Oops, looks like this has been redeemed already.</p>

  const redeemResult = redeemed
    ? redeemedText
    : totalPoints > cost
      ? redeemButton
      : insufficientPointsText
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'fixed',
        display: showRedeemModal ? 'block' : 'none',
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
          onClick={() => updateShowRedeemModalCb()}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </span>
        <img height={40} src={logo} />
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
        {pointsSpan}
        {redeemResult}
      </div>
    </div>
  )
}

export default PopUpModal
