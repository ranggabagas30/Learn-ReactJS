import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    let message
    if (this.state.isLoggedIn) {
        message = <div>Welcome Rangga</div>  
    } else {
        message = <div>Welcome Guest</div> 
    }
    return message
  }
}

export default UserGreeting