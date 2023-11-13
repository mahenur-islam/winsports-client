import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateBlog = () => {
  const singleBlog = useLoaderData();
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);

  useEffect(() => {
    // Set initial values when the component mounts
    if (singleBlog) {
      setTitle(singleBlog.title || '');
      setShortDescription(singleBlog.shortDescription || '');
      setContent(singleBlog.content || '');
      setCategory(singleBlog.category || '');
      // Assuming images are stored as an array in your database
      setImages(singleBlog.images || []);
      setImagePreviewUrls(
        singleBlog.images
          ? singleBlog.images.map((image) => URL.createObjectURL(image))
          : []
      );
    }
  }, [singleBlog]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleShortDescriptionChange = (e) =>
    setShortDescription(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    const imagePreviewList = selectedImages.map((image) =>
      URL.createObjectURL(image)
    );
    setImages(selectedImages);
    setImagePreviewUrls(imagePreviewList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if singleBlog and singleBlog._id are available
    if (!singleBlog || !singleBlog._id) {
      toast.error('Blog ID not available');
      return;
    }

    const updatedBlog = {
      title,
      shortDescription,
      content,
      category,
      images,
      imagePreviewUrls,
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

    // Clear form fields after submission
    setTitle('');
    setShortDescription('');
    setContent('');
    setCategory('');
    setImages([]);
    setImagePreviewUrls([]);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="p-5">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Title:
            </label>
            <input
              type="text"
              onChange={handleTitleChange}
              defaultValue={singleBlog?.title}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Short Description:
            </label>
            <textarea
              onChange={handleShortDescriptionChange}
              defaultValue={singleBlog?.shortDescription}
              className="mt-1 p-2 border rounded-md w-full"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Content:
            </label>
            <textarea
              defaultValue={singleBlog?.content}
              onChange={handleContentChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Category:
            </label>
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
            <label className="block text-sm font-medium text-gray-600">
              Images:
            </label>
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
    </div>
  );
};

export default UpdateBlog;
