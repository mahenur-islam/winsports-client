import React, { useState } from "react";
// import Categories from "../components/Categories/Categories";
import { useLoaderData, Link } from "react-router-dom";
import BlogCard from "../components/blogCard/blogCard";
import useAddToWishList from "../hooks/useAddToWishList";

const AllBlogs = () => {
  const blogs = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [updatedBlogs, setUpdatedBlogs] = useState(blogs);
  const addToWishList = useAddToWishList();

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
      <div className="bg-gray-400 py-10">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="mb-2">All Blogs</h1>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by blog name"
            className="p-2 border rounded-md w-96 mb-10"
          />
        </div>
        {/* <Categories></Categories> */}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-20">
          {updatedBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              addToWishlist={addToWishList}
              handleDelete={handleDelete}
             className="mx-auto"></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
