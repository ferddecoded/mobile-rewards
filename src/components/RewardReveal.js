import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const revealBubbleStyle = {
  height: '80px',
  width: '200px',
  background: '#fff',
  position: 'absolute',
  cursor: 'default',
  border: '1px solid #2bd686',
  borderRadius: '10px',
  top: '80px',
  left: '157px',
  padding: '20px',
  display: 'none',
}

const RewardReveal = ({ rewards, showRewardReveal }) => {
  const eligibleReward = <FontAwesomeIcon icon={faArrowAltCircleRight} />
  const inEligibleReward = <FontAwesomeIcon style={{ color: 'red' }} icon={faTimesCircle} />
  return (
    <div
      className="reward-reveal"
      style={
        showRewardReveal
          ? { ...revealBubbleStyle, display: 'block' }
          : revealBubbleStyle
      }
    >
      <span style={{ display: 'block', fontSize: 14 }}>
        You can redeem the following:
      </span>
      {rewards.map((reward, index) => (
        <div key={index.toString()}>
          <span
            style={{ display: 'block', margin: 5 }}
          >
            {reward.redeemed ? inEligibleReward : eligibleReward}
            &emsp;&emsp;
            {reward.brand}
          </span>
        </div>
      ))}
    </div>
  )
}

export default RewardReveal
