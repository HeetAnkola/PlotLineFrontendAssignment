import React from 'react'
import {Transforms} from 'slate'
import {ReactEditor,useSlateStatic} from 'slate-react'

const LinkElement = props => {
    const editor = useSlateStatic()
    const path = ReactEditor.findPath(editor, props.element)
    return (
      <>
       <span style={{
              marginLeft:"5px",
              marginRight:"5px",
              color:"black",
              cursor:'pointer'
        }}
        onClick = {() => Transforms.removeNodes(editor, { at: path })}
        >x</span>
       <a href={props.element.url} {...props.attributes}>
        {props.children}
        {props.element.url}
       </a>
      </>
    )
}

export default LinkElement