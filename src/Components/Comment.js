import React, { useState } from "react";
import Votes from "./Votes";
import UserProfile from "./UserProfile";
import CommentReply from "./CommentReply";
import Reply from "./Reply";
// import { FaReply } from "react-icons/fa";

const Comment = React.forwardRef((props, ref) => {
  const {
    content,
    profileImage,
    username,
    createdAt,
    score,
    replies,
    deleteFunc,
    editFunc,
    // replyFunc,
    sendFunc,
    currentUser,
    updateFunc,
    commentReplyFunc,
  } = props;
  const [response, setResponse] = useState(false);
  const [editing, setEditing] = useState(false);
  // const [editReply, setEditReply]= useState(false);
  const replyComment = () => {
    console.log("bye b");
    setResponse(true);
  };

  const editComment = () => {
    console.log("Adaeze");
    setEditing(true);
  };

  // const editCommentReply = () =>{
  //   console.log('Chiamaka')
  //   setEditReply(true)
  // }
  return (
    <div className="comments">
      <div className="comment">
      <Votes score={score} />

<div className="commentContent">
  <UserProfile
    profileImage={profileImage}
    username={username}
    createdAt={createdAt}
    delFunc={deleteFunc}
    // editFunc={editFunc}
    editFunc={editComment}
    // replyFunc={replyFunc}
    replyFunc={replyComment}
  />
  {editing ? (
    <Reply
      inner={"Update"}
      imageSrc={currentUser}
      original={content}
      func={() => {
          updateFunc()
          setEditing(false);
      }}
      ref={ref}
    />
  ) : (
    <p className="content">{content}</p>
  )}
  </div>

      </div>
     
      
      {/* {console.log(replies)} */}

      {replies.length > 0 &&
        replies.map((ele) => (
          <CommentReply
            key={ele.id}
            profileImage={ele.user.image.png}
            score={ele.score}
            content={ele.content}
            username={ele.user.username}
            createdAt={ele.createdAt}
            replyto={ele.replyingTo}
            deleteFunc={() => deleteFunc(ele.id)}
            editFunc={editFunc}
            // editFunc={editComment}
            // editFunc={editCommentReply}
            sendFunc={commentReplyFunc}
            currentUser={currentUser}
            ref={ref}
            // replyFunc={replyFunc}
            // replyFunc={replyComment}
          />
        ))}
        {/* {editReply && <Reply inner={"Update"}/>} */}

      {response && (
        <Reply
          inner={"Reply"}
          imageSrc={currentUser}
          textholder={"Reply message"}
          func={() => {
            sendFunc()
            setResponse(false);
          }}
          ref={ref}
        />
      )}
    </div>
  );
});

export default Comment;
/* <button>
        {" "}
        <FaReply /> Reply
      </button> */
