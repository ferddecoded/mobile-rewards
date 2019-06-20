import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import logo from '../images/logo-green.png'
import { setNewPoints, setAwaitingPoints } from '../actions/points'
import PointBalance from '../components/PointBalance'

import sum from '../utils/calculatePointsSum'
import generateRandomValue from '../utils/generateRandomValue'

class Application extends Component {
  // method that outlines the user's currently viewed tab
  setSelectedTab = selectedTab => {
    this.props.setTab(selectedTab)
  }

  // method that is meant for the user to earn points on Drop
  // creates a point object using setNewPoints that utlizes setTimeout
  randomEarnedPoints = () => {
    const retailers = ['Amazon', 'Metro', 'Tim Hortons', 'Starbucks']
    const randomRetailer = retailers[generateRandomValue(0, 3)]
    const randomPoints = generateRandomValue(0, 2000)
    const timeDelay = generateRandomValue(30000, 60000)
    this.props.setNewPoints({
      date: moment().format('YYYY-MM-DD'),
      brand: randomRetailer,
      amount: randomPoints,
    }, timeDelay)
  }

  render() {
    const { points, location } = this.props
    const selectedStyle = {
      borderBottom: '2px solid #0de47f',
    }

    const totalPoints = sum(points.accumulatedPoints, 'amount')
    if (!points.awaitingPoints) {
      this.randomEarnedPoints()
    }

    const tabLocationUrl = location.pathname.substring(1)
    return (
      <div>
        <div className="top-bar">
          <img height={40} src={logo} />
          <PointBalance amount={totalPoints} />
          <nav>
            <a
              href="#/"
              style={tabLocationUrl === 'points' ? selectedStyle : null}
            >
              Points
            </a>
            <a
              href="#/offers" 
              style={tabLocationUrl === 'offers' ? selectedStyle : null}
            >
              Offers
            </a>
            <a
              href="#/rewards"
              style={tabLocationUrl === 'rewards' ? selectedStyle : null}
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
  selectedTab: state.selectedTab,
})

const ConnectedApplication = connect(
  mapStateToProps,
  {
    setNewPoints,
    setAwaitingPoints,
  }
)(Application)

export default ConnectedApplication
