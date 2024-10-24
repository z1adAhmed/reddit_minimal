import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../features/comments/commentsSlice";
import Comment from "./Comment";

const CommentsList = ({ postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const commentStatus = useSelector((state) => state.comments.status);

  useEffect(() => {
    if (commentStatus === "idle") {
      dispatch(fetchComments(postId));
    }
  }, [commentStatus, postId, dispatch]);

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
