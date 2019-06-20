import React, { Component } from 'react'
import { connect } from 'react-redux'
import PointItem from '../components/PointItem'

class Points extends Component {
  render() {
    // create a new array that is sorted by date
    const sortedPointsByDate = this.props.points.sort((currPoints, nextPoints) => {
      return new Date(currPoints.date) - new Date(nextPoints.date);
    })
    return (
      <div className="container">
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
})

const ConnectedPoints = connect(
  mapStateToProps,
  {}
)(Points)

export default ConnectedPoints
