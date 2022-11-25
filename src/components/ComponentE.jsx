import React, { Component } from 'react'
import ComponentF from './ComponentF.jsx'
import UserContext from './UserContext.jsx'

class ComponentE extends Component {
  render() {
    return (
      <div>
        Component e Context{this.context}
        <ComponentF />
      </div>
      
    )  
  }
}

ComponentE.contextType = UserContext
export default ComponentE
