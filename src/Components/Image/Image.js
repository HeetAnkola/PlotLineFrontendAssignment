import React from 'react'
import {Transforms} from 'slate'
import {ReactEditor,useFocused,useSelected,useSlateStatic} from 'slate-react'

const Image = ({ attributes, children, element }) => {
    const editor = useSlateStatic()
    const path = ReactEditor.findPath(editor, element)
    const selected = useSelected()
    const focused = useFocused()
    return (
      <div {...attributes}>
        {children}
        <div
          contentEditable={false}
          style = {{
            position:'relative'
          }}
        >
          <img
            src={element.url}
            style = {{
              display:'block',
              maxWidth:"100%",
              maxHeight:"20em",
              boxShadow:selected && focused ? '0 0 0 3px #B4D5FF' : 'none',
            }}
            alt="Speaker"
          />
          <button
            active
            onClick={() => Transforms.removeNodes(editor, { at: path })}
            style = {{
              display : selected && focused ? 'inline' : 'none',
              position:'absolute',
              top:"0.5em",
              left:"0.5em",
              background:'white',
            }}
            
          >
            <span style={{
              marginLeft:"5px",
              marginRight:"5px"
            }}>x</span>
          </button>
        </div>
      </div>
    )
}

export default Image