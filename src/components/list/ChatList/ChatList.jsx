import { useState } from "react";
import "./ChatList.css";
import AddUser from "./addUser/addUser";


const ChatList = () => {
    const [addMode,setAddMode]= useState(false)
    return (
      <div className="ChatList">
        <div className="Search">
          <div className="SearchBar">
            <img src="search.png" alt="" />
            <input type="text" placeholder="Search" />
          </div>
          <img src={addMode ? "./minus.png" : "./plus.png"} alt="" 
          className="add"
          onClick={() => setAddMode((prev) => !prev)} />
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Nguyễn Đức Thuận</span>
          <p>Hello</p>
        </div>
        </div>
        <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Huệ Trần</span>
          <p>Hello</p>
        </div>
        </div>
        <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Đinh Tuấn Hùng</span>
          <p>What r u doin</p>
        </div>
        </div>
        <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Phan Nguyễn</span>
          <p>Wut sup</p>
        </div>
        </div>
        <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Lốp Xốp</span>
          <p>Hi there</p>
        </div>
        </div>
        {addMode && <AddUser/>}
      </div>
      
    );
  };
  
  
  export default ChatList;