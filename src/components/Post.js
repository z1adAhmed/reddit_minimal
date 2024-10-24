import React from "react";
import "./Post.css"; // Ensure this line is present

const Post = ({ post }) => {
  return (
    <div className="post">
      {/* Display the post title */}
      <h3>{post.title}</h3>

      {/* Display the post video if available */}
      {post.is_video && post.media?.reddit_video?.fallback_url ? (
        <video controls className="post-video">
          <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : null}

      {/* Display the post image if available and if there's no video */}
      {!post.is_video &&
      post.thumbnail &&
      post.thumbnail !== "self" &&
      post.thumbnail !== "default" ? (
        <img src={post.thumbnail} alt="" className="post-image" />
      ) : null}

      {/* Display the post text (if available) */}
      {post.selftext ? <p>{post.selftext}</p> : <p>No content available.</p>}

      {/* Link to the full post on Reddit */}
      <a
        href={`https://www.reddit.com${post.permalink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more on Reddit
      </a>
    </div>
  );
};

export default Post;
