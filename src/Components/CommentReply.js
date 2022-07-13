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
    <div>
      <Votes score={score} />
      <div>
        <UserProfile
          profileImage={profileImage}
          username={username}
          createdAt={createdAt}
          delFunc={deleteFunc}
          editFunc={editFunc}
          replyFunc={replyComment}
        />
        <p>
          <span>{replyto}</span> {content}
        </p>
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
