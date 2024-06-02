import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
      this.greetParent2 = this.greetParent2.bind(this)
    }

    greetParent() {
        // interchangebly 
        //alert('Hello ' + this.state.parentName)
        alert(`Hello ${this.state.parentName}`)
    }

    greetParent2(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
      <div>
        <h3>Parent - Child component</h3>
        <ChildComponent greetHandler={this.greetParent} greetHandler2={this.greetParent2}/>
      </div>
    )
  }
}

export default ParentComponent