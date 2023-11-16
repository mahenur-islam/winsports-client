// UpdateBlog.js
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateBlog = () => {
  const singleBlog = useLoaderData();
  console.log(singleBlog);

  const [title, setTitle] = useState(singleBlog?.title || '');
  const [shortDescription, setShortDescription] = useState(singleBlog?.shortDescription || '');
  const [content, setContent] = useState(singleBlog?.content || '');
  const [category, setCategory] = useState(singleBlog?.category || '');
  const [photoUrl, setPhotoUrl] = useState(singleBlog?.photoUrl || '');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleShortDescriptionChange = (e) => {
    setShortDescription(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePhotoUrlChange = (e) => {
    setPhotoUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your logic to submit the form, e.g., send data to a server
    const updatedBlog = {
      title: title,
      shortDescription: shortDescription,
      content: content,
      category: category,
      photoUrl: photoUrl,
    };

    // Make a PUT request to update the blog
    fetch(`http://localhost:5000/blogs/${singleBlog._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('Blog updated successfully');
        } else {
          toast.error('There is an error. Cannot update the blog');
        }
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="p-5">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Title:</label>
            <input
              type="text"
              onChange={handleTitleChange}
              value={title}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Short Description:</label>
            <textarea
              onChange={handleShortDescriptionChange}
              value={shortDescription}
              className="mt-1 p-2 border rounded-md w-full"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Content:</label>
            <textarea
              onChange={handleContentChange}
              value={content}
              className="mt-1 p-2 border rounded-md w-full"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Category:</label>
            <select
              id="selectOption"
              onChange={handleCategoryChange}
              value={category}
            >
              <option value="">Select an option</option>
              <option value="Soccer">Option 1</option>
              <option value="Cricket">Option 2</option>
              <option value="Car Racing">Option 3</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Photo URL:</label>
            <input
              type="text"
              onChange={handlePhotoUrlChange}
              value={photoUrl}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
