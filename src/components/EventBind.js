import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hallo'
      }

      // Third approach : binding happens once in constructor
      this.clickHandler2 = this.clickHandler2.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

    clickHandler2() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

    clickHandler3 = () => {
        this.setState({
            message: 'Goodbye'
        })
    }

  render() {
    return (
      <div>
        <h1>Event Bind</h1>
        <div>{this.state.message}</div>
        {/* Firt and second approach here are not good in performance */}
        <button onClick={this.clickHandler.bind(this)}>Click first approach</button>
        <button onClick={() => this.clickHandler2()}>Click second approach</button>
        
        {/* Thrid approach */}
        <button onClick={this.clickHandler3}>Click third approach</button>
      </div>
    )
  }
}

export default EventBind