import React, { useState } from "react";
import UserProfile from "./UserProfile";
import Votes from "./Votes";
import Reply from "./Reply";

const CommentReply = React.forwardRef((props, ref) => {
  const { score, profileImage, username, createdAt, replyto, content, deleteFunc, editFunc, currentUser, sendFunc, } = props
  const [response, setResponse] = useState(false);
  const replyComment = () => {
    console.log("bye b 2");
    setResponse(true);
  };
  return (
    <div className="reply-box">
  
       <div className="reply-comment">
      <Votes score={score} />
      <div className="commentContent">
        <UserProfile
          profileImage={profileImage}
          username={username}
          createdAt={createdAt}
          delFunc={deleteFunc}
          editFunc={editFunc}
          replyFunc={replyComment}
        />
        <p>
          <span className="repliedTo">{replyto}</span> {content}
        </p>
      </div>
      </div>
      

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

export default CommentReply;
