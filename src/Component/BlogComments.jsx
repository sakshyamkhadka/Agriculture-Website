import React from "react";
import "../Styles/Blogcomment.css";

const BlogComments = () => {
  const comments = [
    {
      id: 1,
      name: "Alice Johnson",
      date: "Nov 10, 2025",
      avatar: "https://i.pravatar.cc/60?img=1",
      text: "Amazing article! Learned a lot about modern farming techniques.",
      replies: [
        {
          id: 11,
          name: "Brian Smith",
          date: "Nov 11, 2025",
          avatar: "https://i.pravatar.cc/60?img=2",
          text: "Totally agree! The section about hydroponics was eye-opening."
        },
        {
          id: 12,
          name: "Clara Lee",
          date: "Nov 12, 2025",
          avatar: "https://i.pravatar.cc/60?img=3",
          text: "Thanks for highlighting that, I didn’t know about it either!"
        }
      ]
    },
    {
      id: 2,
      name: "Daniel Kim",
      date: "Nov 12, 2025",
      avatar: "https://i.pravatar.cc/60?img=4",
      text: "Informative post! Would love to read more about eco-friendly fertilizers.",
      replies: []
    },
    {
      id: 3,
      name: "Eva Martinez",
      date: "Nov 13, 2025",
      avatar: "https://i.pravatar.cc/60?img=5",
      text: "The images really help visualize the new farming methods.",
      replies: [
        {
          id: 31,
          name: "Frank Wilson",
          date: "Nov 13, 2025",
          avatar: "https://i.pravatar.cc/60?img=6",
          text: "Yes! I especially liked the drone photography example."
        }
      ]
    }
  ];

  const renderReplies = (replies) => {
    return replies.map(reply => (
      <div key={reply.id} className="comment-reply-card">
        <img src={reply.avatar} alt={reply.name} className="comment-avatar" />
        <div className="comment-content">
          <div className="comment-header">
            <span className="comment-author">{reply.name}</span>
            <span className="comment-date">{reply.date}</span>
          </div>
          <p className="comment-text">{reply.text}</p>
          <span className="comment-reply">Reply</span>
        </div>
      </div>
    ));
  };

  return (
    <div className="comments-container-main">
      <h2 className="comments-title">Comments</h2>
      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment-card">
            <img src={comment.avatar} alt={comment.name} className="comment-avatar" />
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">{comment.name}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <p className="comment-text">{comment.text}</p>
              <span className="comment-reply">Reply</span>
              {comment.replies && comment.replies.length > 0 && (
                <div className="comment-replies">{renderReplies(comment.replies)}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComments;
