import React from 'react'
import moment from 'moment'
import accounting from 'accounting'

const RedeemedItem = ({ brand, cost, date }) => {
  const formattedDate = moment(date).format('YYYY-MM-DD h:mm')
  return (
    <div className="redeem-item">
      <div style={{ display: 'flex', justifyContent: 'space-between', width: 220 }}>
        
        <span style={{ marginRight: 30, color: '#A3A3A3', fontSize: 20 }}>{brand}</span>

        <span style={{ color: 'red', fontWeight: 500, fontSize: 20 }}>{accounting.formatNumber(cost)}</span>
        
      </div>
      <p style={{ margin: 0 }}>{formattedDate}</p>
    </div>
  )
}

export default RedeemedItem
