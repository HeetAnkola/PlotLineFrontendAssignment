import React from 'react'

export default function HighLight(props) {
  //create highlight function
  console.log(props);
  return (
    <span {...props.attributes} style={{backgroundColor:props.element.type}}>{props.children}</span>
  )
}
