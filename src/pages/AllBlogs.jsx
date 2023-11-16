import React, { useState } from "react";
import Categories from "../components/Categories/Categories";
import { useLoaderData, Link } from "react-router-dom";
import toast from "react-hot-toast";
import BlogCard from "../components/blogCard/blogCard";
// import RecentPost from "../components/RecentPost/RecentPost";

const AllBlogs = () => {
  const blogs = useLoaderData();
  const [updatedBlogs, setUpdatedBlogs] = useState(blogs);
  const [searchQuery, setSearchQuery] = useState('');

  // delete a blog
  const handleDelete = (_id) => {
    const URL = `http://localhost:5000/blogs/${_id}`;
    fetch(URL, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const filteredData = updatedBlogs.filter((item) => item._id !== _id);
        setUpdatedBlogs(filteredData);
        if (data.deletedCount > 0) {
          toast.success("Blog deleted successfully");
        }
      });
  };

  // Function to add a blog to the wishlist
  const addToWishlist = async (blogId) => {
    try {
      const response = await fetch(`http://localhost:5000/wishlist/${blogId}`, {
        method: "POST",
      });

      if (response.ok) {
        toast.success("Blog added to wishlist");
      } else {
        toast.error("Failed to add blog to wishlist");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding blog to wishlist");
    }
  };

  // Update the search query and filter blogs accordingly
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filteredBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setUpdatedBlogs(filteredBlogs);
  };

  return (
    <div>
      <Categories></Categories>
      <div>
        <h1 className="text-center mb-10">All blogs</h1>
        {/* Search input */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by blog name"
          className="p-2 mb-4 border rounded-md"
        />
        {/* <RecentPost blogs={blogs} /> */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-20">
          {updatedBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              addToWishlist={addToWishlist}
              handleDelete={handleDelete}
            ></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
