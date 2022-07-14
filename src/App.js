import React, { useState } from "react";
import Comment from "./Components/Comment";
import Reply from "./Components/Reply";
import currentUser from "./images/avatars/image-juliusomo.png";
import "./Components/Styles.css"

function App() {
  const commentsArray = [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ];
  const [comments, setComments] = useState(commentsArray);
  // const [response, setResponse] = useState(false)
  const ref = React.createRef();
  const replyRef = React.createRef();
  const generateId = () => Math.floor(Math.random() * 150);

  const sendComment = () => {
    const value = ref.current.value;
    const newComment = {
      id: generateId(),
      content: value,
      createdAt: "today",
      score: 0,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
      replies: [],
    };
    setComments((prev) => [...prev, newComment]);
  };
  const sendReply = (userName) => {
    const value = replyRef.current.value;
    const items = [...comments];
    const newReply = {
      id: generateId(),
      content: value,
      createdAt: "today",
      score: 0,
      replyingTo: userName,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
    };
    items.forEach((ele) => {
      const {
        id,
        content,
        createdAt,
        score,
        user: { image, username },
        replies,
      } = ele;
      console.log(id, content, createdAt, score, image);
      if (username === userName) {
        replies.push(newReply);
      }
    });

    setComments(items);
  };

  const deleteComment = (ID) => {
    console.log("heyy");
    const items =[...comments]
    console.log(items)
    let index;
    items.forEach((ele, i) => {
      if (ele.id === ID) index = i;
    });
    items.splice(index, 1);
    setComments(items);
  };
  const editComment = (ID) => {
    const value = replyRef.current.value;
    const items = [...comments];
    items.forEach((ele) => {
      if (ele.id === ID) {
        ele.content = value;
      }
    });
    console.log(comments)
    setComments(items);
    console.log(comments)
  };

  // const replyComment = () =>{
  //   console.log('bye b')
  //   // setResponse(true)
  // }
  const handleReply =(userName)=>{
    const value = replyRef.current.value;
    const items = [...comments];
    console.log(items)
    const newReply = {
      id: generateId(),
      content: value,
      createdAt: "today",
      score: 0,
      replyingTo: userName,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
    };
    items.forEach(ele =>{
      const {
        id,
        content,
        createdAt,
        score,
        user: { image, username },
        replies,
      } = ele;
      console.log(id, content, createdAt, score, image);
      if (username === userName) {
        replies.push(newReply);
      }
    })
    setComments(items);
  }
  return (
    <div className="page-body">
      {comments.map((ele) => (
        <Comment
          content={ele.content}
          username={ele.user.username}
          profileImage={ele.user.image.png}
          key={ele.id}
          score={ele.score}
          createdAt={ele.createdAt}
          replies={ele.replies}
          deleteFunc={() => deleteComment(ele.id)}
          editFunc={editComment}
          // replyFunc={replyComment}
          sendFunc={() => sendReply(ele.user.username)}
          updateFunc={() => editComment(ele.id)}
          currentUser={currentUser}
          commentReplyFunc={() => handleReply(ele.user.username)}
          ref={replyRef}
        />
      ))}

      <div>
        <Reply
          inner={"Send"}
          func={sendComment}
          imageSrc={currentUser}
          textholder={"Add a comment"}
          ref={ref}
        />

        {/* <img src={currentUser} alt={currentUser} />
        <textarea placeholder="Add a comment" ref={ref}></textarea>
        <button onClick={sendComment}>Send</button> */}
      </div>
    </div>
  );
}

export default App;

// for (const key in ele) {
//   //  console.log(key)
//     if(key === 'replies' || key ==='user'){
//       console.log(key.username)
//       console.log(key)
//       console.log(ele[key])
//       // ele[key].push(newReply)
//       // console.log(ele[key])
//     }
//   }
