import React from "react";

const JsxHello = () => {
    // return React.createElement('div', null, 'h1', 'Hello Rangga, this is jsx sample')
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Rangga this is jsx sample'))
}

export default JsxHello