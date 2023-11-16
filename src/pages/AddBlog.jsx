// AddBlog.js
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [details, setdetails] = useState('');
  const [category, setCategory] = useState('');
  const [image, setimage] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleShortDescriptionChange = (e) => {
    setShortDescription(e.target.value);
  };

  const handledetailsChange = (e) => {
    setdetails(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleimageChange = (e) => {
    setimage(e.target.value);
  };

  const getCurrentTime = () => {
    const now = new Date();
    setCurrentTime(now.toLocaleString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set the current time before submitting
    getCurrentTime();

    // Perform your logic to submit the form, e.g., send data to a server
    const myBlog = {
      title: title,
      shortDescription: shortDescription,
      details: details,
      category: category,
      image: image,
      currentTime: currentTime, // Include the current time in the blog data
    };

    // Clear form fields after submission
    setTitle('');
    setShortDescription('');
    setdetails('');
    setCategory('');
    setimage('');

    // Fetch to post data
    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {
        'details-Type': 'application/json',
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
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-xl rounded mb-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Blog Post</h2>
      <form onSubmit={handleSubmit} className="p-5">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Short Description:</label>
          <textarea
            value={shortDescription}
            onChange={handleShortDescriptionChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">details:</label>
          <textarea
            value={details}
            onChange={handledetailsChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Category:</label>
          <select
            id="selectOption"
            defaultValue={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select an option</option>
            <option value="Soccer">Option 1</option>
            <option value="Cricket">Option 2</option>
            <option value="Car Racing">Option 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Photo URL:</label>
          <input
            type="text"
            value={image}
            onChange={handleimageChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Current Time:</label>
          <input
            type="text"
            value={currentTime}
            className="mt-1 p-2 border rounded-md w-full"
            // readOnly
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
  );
};

export default AddBlog;
