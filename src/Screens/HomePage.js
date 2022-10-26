import React, { useState, useCallback } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Picker from "emoji-picker-react";
import { SketchPicker } from "react-color";
import NavBar from "../Components/NavBar/NavBar";
import ToolBar from "../Components/ToolBar/ToolBar";
import CustomEditor from "../Modules/Custom_Editor";
import { withImages } from "../Modules/Utility_Functions";
import LinkElement from "../Components/LinkElement/LinkElement";
import AlignElement from "../Components/AlignElement/AlignElement";
import Tag from '../Components/Tag/Tag'
import {
  ListItem,
  NumberedList,
} from "../Components/ListComponents/ListComponents";
import Leaf from "../Components/Leaf/Leaf";
import Paragraph from "../Components/Paragraph/Paragraph";
import Image from "../Components/Image/Image";
import SpeakerBox from "../Components/SpeakerBox/SpeakerBox";
import "./HomePage.css";

const initialValue = [
  {
    type: "paragraph",
    children: [
      {
        text: "There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randomised wowhich don`t look even slightly believable. If you are going to use a passage. There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variation passages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randowowhich don`t look even slightly believable. If you are going to use a passage.",
      },
    ],
  },
];

function HomePage() {
  const [editor] = withImages(useState(() => withReact(createEditor())));
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState("#000");
const [highlated, setHighlated] = useState([])
  const renderElement = useCallback((props) => {
    // renders block element in slate editor
    switch (props.element.type) {
      case "numbered-list":
        return <NumberedList {...props} />;
      case "list-item":
        return <ListItem {...props} />;
      case "image":
        return <Image {...props} />;
      case "link":
        return <LinkElement {...props} />;
      case "left":
        return <AlignElement {...props} />;
      case "center":
        return <AlignElement {...props} />;

      default:
        return <Paragraph {...props} />;
    }
  }, []);
  
  const renderLeaf = useCallback((props) => {
    // renders inline element in slate editor
    return <Leaf {...props} />;
  }, []);

  
  const handleKeyDownEvent = (event) => {
    if (!event.ctrlKey) {
      return;
    }
    switch (event.key) {
      case "b": {
        event.preventDefault();
        CustomEditor.toggleBoldMark(editor);
        break;
      }
      case "i": {
        event.preventDefault();
        CustomEditor.toggleItalicMark(editor);
        break;
      }
      case "u": {
        event.preventDefault();
        CustomEditor.toggleUnderlineMark(editor);
        break;
      }
      case "h":{
        event.preventDefault();
        CustomEditor.toggleHighLightMark(editor);
        break;
      }

      default:
        break;
    }
  };

  const onEmojiClick = (emojiObject, event) => {
    editor.insertText(emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleColorChange = (color) => {
    CustomEditor.toggleColorMark(editor, color.hex);
    setColor(color);
  };
    return (
    <>
      <NavBar title={"Data"} logo={"plotLineLogo.svg"} />
      <div className="container">
        <h1>John Doe Inteview</h1>
        <Slate editor={editor} value={initialValue} style={{width :"200vh"}} onChange={() => {
 const data = editor.children[0].children.filter(child =>  child.highlight)
 setHighlated(data)
        }}>
          <ToolBar
            customEditor={CustomEditor}
            editor={editor}
            setShowPicker={setShowEmojiPicker}
            setColorPicker={setShowColorPicker}
            
          />

          {showEmojiPicker && (
            <Picker
              pickerStyle={{
                width: "450px",
              }}
              onEmojiClick={onEmojiClick}
            />
          )}

          {showColorPicker && (
            <div>
              <SketchPicker
                color={color}
                onChangeComplete={handleColorChange}
              />
            </div>
          )}
          
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={handleKeyDownEvent}
            placeholder="Enter some text..."
            spellCheck={false}
            onClick={() => {
              setShowEmojiPicker(false);
              setShowColorPicker(false);
            }}
            
          />
          
          <SpeakerBox />
        </Slate>
      </div>
        <Tag editor={highlated} />
    </>
  );
}

export default HomePage;
