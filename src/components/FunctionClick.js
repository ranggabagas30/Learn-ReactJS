import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }
  return (
    <div>
        {/* put clickHandler as event */}
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick