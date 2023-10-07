import React from 'react'

function Menu(props) {
    const renderedChildren = typeof props.children === 'function' ? props.children() : props.children
    return <div>mock arai menu1111{renderedChildren}</div>
}

export { Menu }