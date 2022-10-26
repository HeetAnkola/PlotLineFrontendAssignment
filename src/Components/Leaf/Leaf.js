import React from 'react'


const Leaf = props => {
  let { attributes, children, leaf } = props
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  if (leaf.color) {
    children = <span style={{ color: leaf.color }}>{children}</span>
  }

  
  if (leaf.highlight) {
    children = <span style={{ background: 'yellow' }}>{children}</span>   
  }
  
  
  return(
  <span {...attributes}>{children}</span>);

}

export default Leaf
