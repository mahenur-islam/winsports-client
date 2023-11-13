// AddBlog.js
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);

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

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);

    // Display image preview
    const imagePreviewList = selectedImages.map((image) => URL.createObjectURL(image));
    setImagePreviewUrls(imagePreviewList);

    setImages(selectedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your logic to submit the form, e.g., send data to a server
    const myBlog = {
      title: title,
      shortDescription: shortDescription,
      content: content,
      category: category,
      images: images,
      imagePreviewUrls:imagePreviewUrls,
    }

    console.log(myBlog);
    // Clear form fields after submission
    setTitle('');
    setShortDescription('');
    setContent('');
    setCategory('');
    setImages([]);
    setImagePreviewUrls([]);



    //fetch to post data
    fetch('http://localhost:5000/blogs', {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myBlog)

    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged){
        toast.success('data added successfully')
      }else{
        toast.error('there is an error. Can not add data');
      }
    })
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-xl rounded mb-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Blog Post</h2>
      <form onSubmit={handleSubmit} className='p-5'>
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
          <label className="block text-sm font-medium text-gray-600">Content:</label>
          <textarea
            value={content}
            onChange={handleContentChange}
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
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Images:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
          <div className="mt-2 flex">
            {imagePreviewUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Preview ${index + 1}`}
                className="mr-2 max-w-20 max-h-20"
              />
            ))}
          </div>
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
