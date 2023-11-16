// RecentPosts.js
import React from 'react';

const RecentPost = ({ blogs }) => {
  // Check if blogs is defined and is an array
  if (!Array.isArray(blogs)) {
    // Handle the case where blogs is not an array (e.g., not yet loaded)
    return <p>Loading...</p>;
  }

  // Sort blogs by current time in descending order
  const sortedBlogs = [...blogs].sort((a, b) => new Date(b.currentTime) - new Date(a.currentTime));

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      <ul>
        {sortedBlogs.map((blog) => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.shortDescription}</p>
            <p>Category: {blog.category}</p>
            <p>Current Time: {blog.currentTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPost;
