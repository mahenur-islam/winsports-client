// UpdateBlog.js
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateBlog = ({ onUpdateBlog }) => {
  const singleBlog = useLoaderData();
  console.log(singleBlog);

  const [title, setTitle] = useState(singleBlog?.title || '');
  const [shortDescription, setShortDescription] = useState(singleBlog?.shortDescription || '');
  const [content, setContent] = useState(singleBlog?.content || '');
  const [category, setCategory] = useState(singleBlog?.category || '');
  const [image, setimage] = useState(singleBlog?.image || '');

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

  const handleimageChange = (e) => {
    setimage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBlog = {
      title: title,
      shortDescription: shortDescription,
      content: content,
      category: category,
      image: image,
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
      <div className='max-w-7xl'>
        <div>
          <h1 className="text-sm md:text-xl lg:text-2xl font-semibold text-left py-10 mt-10">
            My <span className="text-[#053B50]">Update Your Blog</span>
            <div className="h-[0.5px]  bg-gray-300 w-full mt-2"></div>
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="p-5 max-w-xl mx-auto">
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
              className="mt-1 p-2 border rounded-md w-full focus:h-[300px]"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Details:</label>
            <textarea
              onChange={handleContentChange}
              value={content}
              className="mt-1 p-2 border rounded-md w-full  focus:h-[300px]"
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
              <option value="Soccer">Soccer</option>
              <option value="Cricket">Cricket</option>
              <option value="Car Racing">Car Racing</option>
              <option value="American Football">American Football</option>
              <option value="Tennis">Tennis</option>
              <option value="Boxing">Boxing</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Photo URL:</label>
            <input
              type="link"
              onChange={handleimageChange}
              value={image}
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
