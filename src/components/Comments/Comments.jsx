import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Comments = ({ blog, fetchComments }) => {
  const { user } = useAuth();
  const { _id, authorEmail, authorName, authorProfileImage, currentTime } =
    blog;
  console.log(_id, authorEmail, authorName, authorProfileImage, currentTime);

  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const submitComment = async () => {
    if (user && user.email !== authorEmail) {
      const blogComment = {
        blogId: _id,
        email: user.email,
        authorEmail,
        authorName,
        currentTime,
      };

      try {
        const response = await axios.post(`/comments/${blog._id}`, blogComment);

        if (response.status === 200) {
          fetchComments();
          setComment("");
          setEmail("");
        } else {
          console.error(`Failed to add comment. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    } else {
      console.error("User email is equal to author email. Cannot add comment.");
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Write a comment:
        </label>
        <textarea
          name="comment"
          className="mt-1 p-2 border rounded-md w-full"
          value={comment}
          onChange={handleCommentChange}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Your Email:
        </label>
        <input
          type="email"
          name="email"
          className="mt-1 p-2 border rounded-md w-full"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={submitComment}
      >
        Add Comment
      </button>
    </div>
  );
};

export default Comments;
