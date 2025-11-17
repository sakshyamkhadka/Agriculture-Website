import React from "react";
import "../Styles/BlogCommentForm.css";

const BlogCommentForm = () => {
  return (
    <div className="post-comment-container">
      <h2 className="post-comment-title">Post Comment</h2>
      <p className="post-comment-subtitle">
        Your email address will not be published. Required fields are marked *
      </p>
      <form className="post-comment-form">
        <div className="input-row">
          <input type="text" className="post-comment-input" placeholder="Your Name" required />
          <input type="email" className="post-comment-input" placeholder="Your Email" required />
        </div>
        <input type="url" className="post-comment-input full-width" placeholder="Your Website" />
        <textarea className="post-comment-textarea" placeholder="Your Comment" requiredrows={6}
        />
        <button type="submit" className="post-comment-button"> Post Comment </button>
      </form>
    </div>
  );
};

export default BlogCommentForm;
