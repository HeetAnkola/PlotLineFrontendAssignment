import React from 'react'
import './Paragraph.css'

const Paragraph = props => {
    return <p className='paragraph' {...props.attributes}>{props.children}</p>
}  

export default Paragraph