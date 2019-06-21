import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import RewardItem from '../components/RewardItem'
import { redeemReward } from '../actions/rewards'

import sum from '../utils/calculatePointsSum'

class Rewards extends Component {
  state = {
    points: this.props.points,
    rewards: this.props.rewards,
  }

  componentWillReceiveProps(nextProps) {
    if(!_.isEqual(this.props.points, nextProps.points)) {
      this.setState({ points: nextProps.points })
    }
    if(!_.isEqual(this.props.rewards, nextProps.rewards)) {
      this.setState({ rewards: nextProps.rewards })
    }
  }

  updateRedeemedReward = (id, date) => {
    this.props.redeemReward(id, date)
  }

  render() {
    const totalPoints = sum(this.state.points.accumulatedPoints, 'amount')
    const totalRedeemed = sum(this.state.rewards.filter((reward) => reward.redeemed), 'cost')
    return (
      <div className="container">
        <ul>
          {this.props.rewards.map((reward, index) => (
            <RewardItem
              key={`reward-${index}`}
              cost={reward.cost}
              brand={reward.brand}
              redeemed={reward.redeemed}
              totalPoints={totalPoints - totalRedeemed}
              id={reward.id}
              updateRedeemedRewardCb={this.updateRedeemedReward}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  rewards: state.rewards,
  points: state.points,
})

const ConnectedRewards = connect(
  mapStateToProps,
  {
    redeemReward,
  }
)(Rewards)

export default ConnectedRewards
