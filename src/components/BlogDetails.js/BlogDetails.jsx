// BlogDetails.js
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
  const blog = useLoaderData();

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.shortDescription}</p>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
