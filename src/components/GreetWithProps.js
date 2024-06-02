import React from "react";  

function GreetWithProps(props) {
    console.log(props)

    const {name, heroName} = props // destructuring props

    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            <h1>also hello {name} a.k.a {heroName}</h1>
            {/* render the child component inside the enclosing tags of this component */}
            {props.children}
        </div>        
    )
}

export default GreetWithProps