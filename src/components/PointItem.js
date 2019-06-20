import React from 'react'
import accounting from 'accounting'

const PointItem = ({ amount, brand, date }) =>
  <div className="line-item">
    <p style={{ marginTop: 0 }}>
      You earned points
    </p>

    <hr style={{ marginBottom: 30 }} />

    <p className="point-text">
      {accounting.formatNumber(amount)}
    </p>
    <p className="label">
      POINTS
    </p>

    <hr style={{ marginTop: 30 }} />

    <p style={{ marginBottom: 0 }}>
      from <b>{brand}</b> on <b>{date}</b>
    </p>
  </div>

export default PointItem
