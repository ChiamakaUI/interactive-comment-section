import React from "react";
import { FaReply, FaPen, FaTrash } from "react-icons/fa";
import IconButton from "./IconButton";

const UserProfile = ({ profileImage, username, createdAt, delFunc, editFunc, replyFunc }) => {
  // const handleDelete = () =>{
  //   console.log('hey there')
  // }
  return (
    <div className="userProfile">
    <div className="profile">
      <img src={profileImage} alt={username} className="avater" />
      <p className="username">{username}</p>
      {username === "juliusomo" ? <span className="you">you</span> : ""}
      <p className="time">{createdAt}</p>
      </div>
      <div className="reply">  
      {username === "juliusomo" ? (
        <>
          <IconButton icon={<FaTrash />} text={"Delete"} func={delFunc} cName="del"/>
          <IconButton icon={<FaPen />} text={"Edit"} func={editFunc} cName="reply-text"/>
          </>
        
      ) : (
        <IconButton icon={<FaReply />} text={"Reply"} func={replyFunc} cName="reply-text"/>
      )}
      </div>
    
    </div>
  );
};

export default UserProfile;
