import React from 'react'
import accounting from 'accounting'

const PointBalance = ({ amount }) => (
  <div style={{ marginTop: 30, marginBottom: 45 }}>
    <p className="point-text">
      {accounting.formatNumber(amount)}
    </p>
    <span
      className="label"
      style={{
        position: 'relative',
        top: -8,
        color: '#0de47f',
      }}>
      PTS
    </span>
  </div>
)

export default PointBalance
