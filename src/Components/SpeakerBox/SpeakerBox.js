import React from 'react'
import Speaker from '../Speaker/Speaker'
import './SpeakerBox.css'

function SpeakerBox() {
  const INITIAL_VALUE = [{
    type: 'paragraph',
    children: [{ text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim mollitia dicta architecto, assumenda maiores temporibus nisi consequuntur! Reprehenderit, minima.' }],
    },
  ]
  return (
    <div className="speakerBox">
        <h4 style={{
            color:'#091E42',
        }}>Box 1</h4>
        <Speaker name={"Speaker 1"} value = {INITIAL_VALUE} timestamp = {"09:45"} profilepic = {"profilePic.png"} />
        <Speaker name={"Speaker 2"} value = {INITIAL_VALUE} timestamp = {"06:35"} profilepic = {"profilePic2.png"} />
        <Speaker name={"Speaker 3"} value = {INITIAL_VALUE} timestamp = {"04:30"} profilepic = {"profilePic3.png"} />
    </div>
  )
}

export default SpeakerBox