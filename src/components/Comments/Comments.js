import React, { useState } from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const [newComment, setNewComment] = useState(' ');
  const [addComment, setAddComment] = useState(' ');
  const { comments } = props;
  

  function submitComment () {
    if (!newComment === ' '){
      console.log("comment is empty")
    }
    else {
      setAddComment(newComment);
    }
  }

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map((comment, id) => (
        <Comment key={id} comments={comment}/>
      ))}
      <span style={{textAlign: "left"}} className="comment">{addComment}</span>
      <input 
        type="text" 
        style={{margin: "5px", width: "380px", height: "25px"}}
        onChange={event => setNewComment(event.target.value)} 
      />
      <button style={{margin: "5px"}} onClick={submitComment}>Comment</button>
    </div>
  );
};

export default Comments;
