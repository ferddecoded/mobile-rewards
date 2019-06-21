import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import logo from '../images/logo-green.png'
import { setNewPoints, setAwaitingPoints } from '../actions/points'
import PointBalance from '../components/PointBalance'
import RewardReveal from '../components/RewardReveal'

import sum from '../utils/calculatePointsSum'
import generateRandomValue from '../utils/generateRandomValue'

const tabStyle = {
  padding: 15,
  borderRadius: 10,
  maxWidth: 100,
}

class Application extends Component {
  state = {
    showRewardReveal: false,
  }
  // method that is meant for the user to earn points on Drop
  // creates a point object using setNewPoints that utlizes setTimeout
  randomEarnedPoints = () => {
    const retailers = ['Amazon', 'Metro', 'Tim Hortons', 'Starbucks']
    const randomRetailer = retailers[generateRandomValue(0, 3)]
    const randomPoints = generateRandomValue(0, 2000)
    const timeDelay = generateRandomValue(10000, 20000)
    this.props.setNewPoints({
      date: moment().format('YYYY-MM-DD'),
      brand: randomRetailer,
      amount: randomPoints,
    }, timeDelay)
  }

  // method that will show Rewards bubble on click of PointBalance
  toggleShowRewardReveal = () => {
    this.setState({ showRewardReveal: !this.state.showRewardReveal })
  }

  // component that will trigger process of user earning rewards at a random time from now
  componentDidMount() {
    const { points } = this.props
    if (!points.awaitingPoints) {
      this.randomEarnedPoints()
    }
  }

  // component that will trigger process of user earning rewards at a random time from now
  componentDidUpdate() {
    const { points } = this.props
    if (!points.awaitingPoints) {
      this.randomEarnedPoints()
    }
  }

  render() {
    const { points, rewards, location } = this.props

    const selectedTabStyle = { ...tabStyle, backgroundColor: 'rgb(43,214,134)', color: '#fff' }
    const totalPoints = sum(points.accumulatedPoints, 'amount')
    const totalRedeemed = sum(rewards.filter(reward => reward.redeemed), 'cost')

    const tabLocationUrl = location.pathname.substring(1)

    return (
      <div>
        <div className="top-bar">
          <img height={40} src={logo} />
          <div
            style={{ position: 'relative', cursor: 'pointer' }}
            onClick={() => this.toggleShowRewardReveal()}
          >
            <PointBalance amount={totalPoints - totalRedeemed} />
            <RewardReveal rewards={rewards} showRewardReveal={this.state.showRewardReveal} />
          </div>
          <nav>
            <a
              href="#/points"
              style={
                tabLocationUrl === 'points' ? selectedTabStyle : tabStyle
              }
            >
              Points
            </a>
            <a
              href="#/offers"
              style={
                tabLocationUrl === 'offers' ? selectedTabStyle : tabStyle
              }
            >
              Offers
            </a>
            <a
              href="#/rewards"
              style={
                tabLocationUrl === 'rewards' ? selectedTabStyle : tabStyle
              }
            >
              Rewards
            </a>
          </nav>
        </div>

        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  points: state.points,
  rewards: state.rewards,
})

const ConnectedApplication = connect(
  mapStateToProps,
  {
    setNewPoints,
    setAwaitingPoints,
  }
)(Application)

export default ConnectedApplication
