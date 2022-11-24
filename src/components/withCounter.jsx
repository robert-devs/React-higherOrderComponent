import React from 'react'

const withCounter = (WrappedCoponent ,incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        Count: 0,
      }
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return {
          Count: prevState.Count + incrementNumber,
        }
      })
    }
    render() {
      return (
        <WrappedCoponent
          Count={this.state.Count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      )
    }
  }
  return WithCounter
}
export default withCounter
