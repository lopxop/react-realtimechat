import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open,setOpen] = useState(false);
  const [text,setText] = useState("");

  const handleEmoji = e =>{
    setText((prev) => prev + e.emoji);
    setOpen(false)
  };

    return (
      <div className="Chat">
        <div className="top">
          <div className="user">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <span>Logan</span>
              <p>Last seen recently</p>
            </div>
          </div>
          <div className="icons">
            <img src="./phone.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./info.png" alt="" />
          </div>
        </div>
        <div className="center">
          <div className="message own">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>test test 123</p>
              <span>1 minute ago</span>
            </div>
          </div>
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>Hello</p>
              <span>1 minute ago</span>
            </div>
          </div>
          <div className="message own">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>Xin Chao</p>
              <span>1 minute ago</span>
            </div>
          </div>
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>ajsdnaksdnasd</p>
              <span>1 minute ago</span>
            </div>
          </div>
          <div className="message own">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>Xin Chao 123</p>
              <span>1 minute ago</span>
            </div>
          </div>
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <img src="./city.png" alt="" />
              <p>abcxyz</p>
              <span>1 minute ago</span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="icons">
            <img src="./img.png" alt="" />
            <img src="./camera.png" alt="" />
            <img src="./mic.png" alt="" />
          </div>
          <input type="text"
          placeholder="Type a message..."
          value={text}
          onChange={e=>setText(e.target.value)}/>
          <div className="emoji">
            <img src="./emoji.png"
             alt=""
             onClick={()=>setOpen((prev) => !prev)} />

             <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
            </div>
          </div>
          <button className="sendButton">Send</button>
        </div>
      </div>
      
    )
  }
  
  
  export default Chat