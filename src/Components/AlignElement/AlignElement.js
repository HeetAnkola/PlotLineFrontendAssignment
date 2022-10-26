import React from 'react'

const AlignElement = props => {
    return <p {...props.attributes} style={{textAlign:props.element.type}}>{props.children}</p>
}

export default AlignElement