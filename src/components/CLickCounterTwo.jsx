import React, { Component } from 'react'

 class CLickCounterTwo extends Component {
 
  render() {
    const { count ,incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount} style ={{padding:'15px'}}> clicked {count} times</button>
      </div>
    )
  }
}

export default CLickCounterTwo