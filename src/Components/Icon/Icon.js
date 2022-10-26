import React from 'react'

function Icon({icon,handleClick,editor,setShowPicker,title,setColorPicker,id,height}) {
  return (
    <img src={icon} alt={icon} onClick = {() => {
      if (setShowPicker){
        setShowPicker((val) => !val);
      }else if(setColorPicker){
        setColorPicker((val) => !val);
      }
      else{
        handleClick(editor);
      }
    }} id={id} style = {height ? {height : height} : {}} title = {title}  className='icon'/>
  )
}

export default Icon