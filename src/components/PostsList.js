import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/postSlice"; // Adjust the import path as necessary
import Post from "./Post"; // Adjust the import path as necessary

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const after = useSelector((state) => state.posts.after); // Track the after value for pagination
  const status = useSelector((state) => state.posts.status);

  // Fetch initial posts when the component mounts
  useEffect(() => {
    if (!after) {
      dispatch(fetchPosts()); // Fetch initial posts without an after value
    }
  }, [dispatch, after]);

  // Infinite scroll to fetch more posts when reaching the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 // Load more when 100px from bottom
      ) {
        if (after && status !== "loading") {
          // Check if 'after' exists and not already loading
          dispatch(fetchPosts(after)); // Fetch more posts
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, after, status]);

  return (
    <div>
      {status === "loading" && <p>Loading posts...</p>}
      {status === "failed" && <p>Error loading posts.</p>}
      {posts.length === 0 && status !== "loading" && <p>No posts available.</p>}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
