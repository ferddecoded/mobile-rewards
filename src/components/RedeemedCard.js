import React from 'react'
import RedeemedItem from './RedeemedItem'

import sum from '../utils/calculatePointsSum'
import accounting from 'accounting'

const RedeemedCard = ({ rewards }) => {
  const totalRedeemed = sum(rewards.filter(reward => reward.redeemed), 'cost')
  const totalRedeemedText = <span className="redeem-text">{`-${accounting.formatNumber(totalRedeemed)}`}</span>
  const sortedRedeemedRewardsDate = rewards
    .filter(reward => reward.redeemed)
    .sort((currRewards, nextRewards) => {
      return new Date(nextRewards.date) - new Date(currRewards.date)
    })

  const redeemedRewards = sortedRedeemedRewardsDate.map((item, index) => (
    <RedeemedItem
      brand={item.brand}
      date={item.redeemedDate}
      cost={item.cost}
      key={index.toString()}
    />
  ))

  const noRedeemedRewards = (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <span>No rewards have been redeemed yet.</span>
    </div>
  )
  return (
    <div className="redeem-card">
      <div className="redeem-total-container">
        <h2 className="redeem-title">Total Redeemed:</h2>
        {totalRedeemedText}
      </div>

      <ul className="redeem-items-container">
        {totalRedeemed === 0 ? noRedeemedRewards : redeemedRewards}
      </ul>

    </div>
  )
}

export default RedeemedCard
