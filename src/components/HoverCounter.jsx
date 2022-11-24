import React, { Component } from 'react'
import withCounter from '../withCounter'

class HoverCounter extends Component {
  render() {
    const { Count, incrementCount } = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {Count} times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter,10 )
