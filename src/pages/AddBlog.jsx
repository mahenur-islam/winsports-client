// AddBlog.js
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';

const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    shortDescription: '',
    details: '',
    category: '',
    image: '',
  });
  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the current date and time
    const currentTime = new Date().toLocaleString();

    // Check if user information is available
    if (user) {
      const myBlog = {
        ...blogData,
        currentTime: currentTime,
        authorName: user.displayName,
        authorEmail: user.email,
        authorProfileImage: user.photoURL,
      };

      // Clear form fields after submission
      setBlogData({
        title: '',
        shortDescription: '',
        details: '',
        category: '',
        image: '',
      });

      fetch('https://winsports-server.vercel.app/blogs', {
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
    } else {
      toast.error('User information not available');
    }
  };

  return (
    <div className="max-w-2xl mx-auto rounded-lg shadow-xl p-10">
      <h2 className="text-2xl font-bold text-center">Add Blog Post</h2>
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
          <label className="block text-sm font-medium text-gray-600 mb-2">Category:</label>
          <select
            name="category"
            value={blogData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Soccer">Soccer</option>
            <option value="Cricket">Cricket</option>
            <option value="Tennis">Tennis</option>
            <option value="Racing">Racing</option>
            <option value="Rugby">Rugby</option>
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
        <button
          type="submit"
          className="outline p-2 rounded-md text-[#053B50] bg-white hover:bg-[#053B50] hover:text-white w-full"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
