import React, { Component } from 'react'
import { connect } from 'react-redux'
import PointItem from '../components/PointItem'
import RedeemedCard from '../components/RedeemedCard'

class Points extends Component {
  state = {
    points: this.props.points,
    rewards: this.props.rewards,
  }

  componentDidUpdate() {
    if (this.props.points.length !== this.state.points.length) {
      this.setState({ points: this.props.points })
    }
  }
  render() {
    // create a new array that is sorted by date
    const sortedPointsByDate = this.state.points.sort((currPoints, nextPoints) => {
      return new Date(nextPoints.date) - new Date(currPoints.date)
    })

    return (
      <div className="container">
        <RedeemedCard rewards={this.state.rewards} />
        <ul>
          {sortedPointsByDate.map((point, index) => (
            <PointItem
              key={`point-${index}`}
              amount={point.amount}
              brand={point.brand}
              date={point.date}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  points: state.points.accumulatedPoints,
  rewards: state.rewards,
})

const ConnectedPoints = connect(
  mapStateToProps,
  {}
)(Points)

export default ConnectedPoints
