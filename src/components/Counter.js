import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
        // modify the state directly won't rerender the UI
        // this.state.count = this.state.count + 1

        // calling setState is asynchronous
        this.setState({
            count: this.state.count + 1
        }, () => { // callback whenever state updated 
            console.log('Callback value', this.state.count)
        })
        console.log(this.state.count)
    }

    incrementUsingFunctionArg() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => { // callback whenever state updated 
            console.log('Callback value', this.state.count)
        })
        console.log(this.state.count)
    }

    incrementUsingFunctionArgWithProps() {
        this.setState((prevState, props) => ({
            count: prevState.count + props.addValue
        }), () => { // callback whenever state updated 
            console.log('Callback value', this.state.count)
        })
        console.log(this.state.count)
    }

    incrementFive() {
        // this will make React set group of multiple set state into a single group to 
        // reduce cost 
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    incrementFiveUsingFunctionArg() {
        this.incrementUsingFunctionArg()
        this.incrementUsingFunctionArg()
        this.incrementUsingFunctionArg()
        this.incrementUsingFunctionArg()
        this.incrementUsingFunctionArg()
    }

    incrementFiveUsingFunctionArgWithProps() {
        this.incrementUsingFunctionArgWithProps()
        this.incrementUsingFunctionArgWithProps()
        this.incrementUsingFunctionArgWithProps()
        this.incrementUsingFunctionArgWithProps()
        this.incrementUsingFunctionArgWithProps()
    }



  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>Increment Five</button>
        <button onClick={() => this.incrementFiveUsingFunctionArg()}>Increment Five Using Function Arg</button>
        <button onClick={() => this.incrementUsingFunctionArgWithProps()}>Increment Using Function Arg with Props</button>
      </div>      
    )
  }
}

export default Counter