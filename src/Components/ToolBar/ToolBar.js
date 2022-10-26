import React from "react";
import Icon from "../Icon/Icon";
import "./ToolBar.css";

function ToolBar({ customEditor, editor, setShowPicker, setColorPicker }) {
  return (
    <div className="toolbar">
      <Icon
        icon="bold.svg"
        handleClick={customEditor.toggleBoldMark}
        editor={editor}
        title={"bold"}
      />
      <Icon
        icon="italic.svg"
        handleClick={customEditor.toggleItalicMark}
        editor={editor}
        title={"italic"}
      />
      <Icon
        icon="underline.svg"
        handleClick={customEditor.toggleUnderlineMark}
        editor={editor}
        title={"underline"}
      />
      <Icon
        icon="A.svg"
        setColorPicker={setColorPicker}
        title={"pick font color"}
      />
      <Icon
        icon="leftAlign.svg"
        handleClick={customEditor.toggleLeftAlignBlock}
        editor={editor}
        title={"align left"}
      />
      <Icon
        icon="center.svg"
        handleClick={customEditor.toggleCenterAlignBlock}
        editor={editor}
        title={"align center"}
      />
      <Icon
        icon="orderedList.svg"
        handleClick={customEditor.toggleNumberedListBlock}
        editor={editor}
        title={"numbered list"}
      />
      <Icon
        icon="link.svg"
        handleClick={customEditor.handleLinkInsert}
        editor={editor}
        title={"insert link"}
        id="#link"
      />
      <Icon
        icon="image.svg"
        handleClick={customEditor.handleImageInsert}
        editor={editor}
        title={"insert image"}
        id="#image"
      />
      <Icon
        icon="emoji.svg"
        setShowPicker={setShowPicker}
        title={"add emoji"}
        id="#emoji"
      />
      
      <Icon type='button'
        icon="highlight.svg"
        handleClick={
          customEditor.toggleHighLightMark}
        editor={editor}
        title={"highlight"}
        id="#highlight"
      />
    </div>
  );
}

export default ToolBar;
