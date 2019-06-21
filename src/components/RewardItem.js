import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

import accounting from 'accounting'
import ProgressBar from './ProgressBar'
import RewardPopUpModal from './RewardPopUpModal'

class RewardItem extends React.Component {
  state = {
    showRedeemModal: false,
  }

  updateShowRedeemModal = () => this.setState({ showRedeemModal: !this.state.showRedeemModal })

  render() {
    const { cost, brand, totalPoints, updateRedeemedRewardCb, id, redeemed } = this.props
    const percentage = (totalPoints / cost) * 100
    const redeemedBadge = <span style={{
      position: 'absolute',
      top: '-5px',
      right: '-30px',
      transition: 'rotate(3%)',
      transform: 'rotate(15deg)',
      backgroundColor: 'goldenrod',
      padding: '10px',
      borderRadius: '10px',
      color:' #fff',
      display: redeemed ? 'block' : 'none',
    }}>REDEEMED</span>
    return (
      <div
        className="line-item"
        onClick={() => this.updateShowRedeemModal()}
      >
        {redeemed && redeemedBadge}
        <RewardPopUpModal
          // values
          showRedeemModal={this.state.showRedeemModal}
          cost={cost}
          brand={brand}
          totalPoints={totalPoints}
          id={id}
          redeemed={redeemed}
          // functions
          updateShowRedeemModalCb={this.updateShowRedeemModal}
          updateRedeemedRewardCb={updateRedeemedRewardCb}
        />
        <p style={{ marginTop: 0, fontSize: 20, color: '#000', fontWeight: 700 }}>
          Reward
          &emsp;
          <span><FontAwesomeIcon style={{ color: '#2bd686', fontSize: 25 }} icon={faMoneyBillWave} /></span>
        </p>

        <hr style={{ marginBottom: 30 }} />

        <p>
          Get a $10 gift card at <b>{brand}</b>
        </p>

        <ProgressBar percentage={percentage > 100 ? 100 : percentage} />

        <hr style={{ marginTop: 30 }} />

        <p style={{ marginBottom: 0 }}>
          This reward costs {accounting.formatNumber(cost)} pts
        </p>
      </div>
    )
  }
}

export default RewardItem
