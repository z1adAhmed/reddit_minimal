import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.body}</p>
      <p>
        <strong>{comment.author}</strong>
      </p>
    </div>
  );
};

export default Comment;
