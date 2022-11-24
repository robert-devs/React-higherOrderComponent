import React, { Component } from 'react'
import withCounter from '../withCounter'

class ClickCounter extends Component {
  render() {
    const { Count, incrementCount } = this.props
    return (
      <div>
        <button onClick={incrementCount}>{this.props.name
        } Clicked {Count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter ,5)
