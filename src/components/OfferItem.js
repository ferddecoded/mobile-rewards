import React from 'react'

const OfferItem = ({ brand, rewardAmount, rewardType, id }) => {
  const favoriteOffer = (offerId) => {
    console.log(offerId)
  }
  const rewardPromoBlock = (
    <span
      style={{
        borderRadius: 5,
        padding: 10,
        position: 'absolute',
        top: -5,
        left: -5,
        backgroundColor: '#f5a623',
        color: '#fff',
      }}
    >
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
  return (
    <div
      className="line-item"
      style={{ position: 'relative' }}
      onDoubleClick={() => favoriteOffer(id)}
    >
      {rewardPromoBlock}
      {rewardDurationBlock}
      <p style={{ marginTop: 0, fontWeight: 700 }}>Offer</p>

      <hr style={{ marginBottom: 30 }} />

      <p>
        <b style={{ fontSize: 16 }}>{brand}</b>
      </p>

      <hr style={{ marginTop: 30 }} />

      <p style={{ marginBottom: 0 }}>Drop Offer</p>
    </div>
  )
}

export default OfferItem
