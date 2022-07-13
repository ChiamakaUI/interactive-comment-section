import React from "react";
import { FaReply, FaPen, FaTrash } from "react-icons/fa";
import IconButton from "./IconButton";

const UserProfile = ({ profileImage, username, createdAt, delFunc, editFunc, replyFunc }) => {
  // const handleDelete = () =>{
  //   console.log('hey there')
  // }
  return (
    <div>
      <img src={profileImage} alt={username} />
      <p>{username}</p>
      {username === "juliusomo" ? <span>you</span> : ""}
      <p>{createdAt}</p>
      {username === "juliusomo" ? (
        <div>
          {/* <button onClick={delFunc}>
          <FaTrash /> Delete
          </button>  */}
          <IconButton icon={<FaTrash />} text={"Delete"} func={delFunc}/>
          <IconButton icon={<FaPen />} text={"Edit"} func={editFunc}/>
          {/* <IconButton icon={<FaReply />} text={"Reply"} func={replyFunc}/> */}
        </div>
      ) : (
        <IconButton icon={<FaReply />} text={"Reply"} func={replyFunc}/>
      )}
    </div>
  );
};

export default UserProfile;
