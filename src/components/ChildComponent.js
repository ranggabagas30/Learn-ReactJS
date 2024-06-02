import React from 'react'

function ChildComponent(props) {
    console.log(props)
  return (
    <div>
        {/*  this is how parent passes handler from parent to child */}
        <button onClick={props.greetHandler}>Greet Parent</button>

        {/* this is how child give something to parent */}
        <button onClick={() => props.greetHandler2('child')}>Greet Parent 2</button>
    </div>
  )
}

export default ChildComponent 