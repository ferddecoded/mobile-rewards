import React from 'react'
import accounting from 'accounting'

const RewardItem = ({ cost, brand }) =>
  <div className="line-item">
    <p style={{ marginTop: 0 }}>
      Reward
    </p>

    <hr style={{ marginBottom: 30 }} />

    <p>
      Get a $10 gift card at <b>{brand}</b>
    </p>

    <hr style={{ marginTop: 30 }} />

    <p style={{ marginBottom: 0 }}>
      This reward costs {accounting.formatNumber(cost)} pts
    </p>
  </div>

export default RewardItem
