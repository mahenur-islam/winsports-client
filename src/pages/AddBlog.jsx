import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    shortDescription: '',
    details: '',
    category: '',
    image: '',
    currentTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getCurrentTime = () => {
    const now = new Date();
    setBlogData((prevData) => ({
      ...prevData,
      currentTime: now.toLocaleString(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCurrentTime();

    const myBlog = { ...blogData };

    // Clear form fields after submission
    setBlogData({
      title: '',
      shortDescription: '',
      details: '',
      category: '',
      image: '',
      currentTime: '',
    });

    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('Data added successfully');
        } else {
          toast.error('There is an error. Cannot add data');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred while submitting the form');
      });
  };

  return (
    <div className="max-w-2xl mx-auto rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-center py-5">Add Blog Post</h2>
      <form onSubmit={handleSubmit} className="p-5">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Title:</label>
          <input
            type="text"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Short Description:</label>
          <textarea
            name="shortDescription"
            value={blogData.shortDescription}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Details:</label>
          <textarea
            name="details"
            value={blogData.details}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Category:</label>
          <select
            name="category"
            value={blogData.category}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Soccer">Soccer</option>
            <option value="Cricket">Cricket</option>
            <option value="Tennis">Tennis</option>
            <option value="Racing">Racing</option>
            <option value="American Football">American Football</option>
            <option value="Boxing">Boxing</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Photo URL:</label>
          <input
            type="text"
            name="image"
            value={blogData.image}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Current Time:</label>
          <input
            type="text"
            name="currentTime"
            value={blogData.currentTime}
            className="mt-1 p-2 border rounded-md w-full"
            readOnly
          />
        </div>
        <button
          type="submit"
          className="outline p-2 rounded-md text-[#053B50] bg-white hover:bg-[#053B50] hover:text-white"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
