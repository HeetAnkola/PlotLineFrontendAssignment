import React from "react"

export const NumberedList = props => {
    return (
      <ol {...props.attributes}>
        {props.children}
      </ol>
    )
  }
  
export const ListItem = props => {
    return (
      <li type="1" {...props.attributes}>
        {props.children}
      </li>
    )
}