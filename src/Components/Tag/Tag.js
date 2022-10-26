import React from 'react'

export default function Tag ({editor}) {
    let d = editor
    return (
        <div className="tag">
            <h4 className='h4sd'>Tag:</h4>
            {
            d.map((tag, index) => {
                 return  (<ul key={index}>{(tag.text.length>12)? tag.text.slice(0,12)+"..." : tag.text}  </ul>);
                }
            )}
        </div>
    )
}