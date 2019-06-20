import React, { Component } from 'react'
import { connect } from 'react-redux'
import RewardItem from '../components/RewardItem'

@connect(state => ({
  rewards: state.rewards,
}))
export default class Rewards extends Component {
  render() {
    return (
      <div className="container">
        <ul>
          {this.props.rewards.map((reward, index) =>
            <RewardItem
              key={`reward-${index}`}
              cost={reward.cost}
              brand={reward.brand}
            />
          )}
        </ul>
      </div>
    )
  }
}
