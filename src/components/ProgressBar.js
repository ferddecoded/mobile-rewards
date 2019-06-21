import React from 'react'

class ProgressBarContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="progress-bar">
          <div className="filler" style={{ width: `${this.props.percentage}%` }} />
        </div>
      </div>
    )
  }
}

export default ProgressBarContainer
