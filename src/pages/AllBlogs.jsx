import React, { useEffect, useState } from "react";
import Categories from "../components/Categories/Categories";
import { useLoaderData, useSearchParams } from "react-router-dom";
import useAddToWishList from "../hooks/useAddToWishList";
import toast from "react-hot-toast";
import Heading from "../components/Heading/Heading";
import Empty from "../components/Cover/Empty";
import { FaArrowUp } from "react-icons/fa";
import BlogCard from "../components/BlogCard/BlogCard";

const AllBlogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  const [searchQuery, setSearchQuery] = useState("");
  const [updatedBlogs, setUpdatedBlogs] = useState(blogs);
  const addToWishList = useAddToWishList();
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    if (category && category !== "All") {
      const filterCategory = blogs.filter((blog) => blog.category === category);
      setUpdatedBlogs(filterCategory);
    } else {
      setUpdatedBlogs(blogs);
    }
  }, [category, blogs]);

  // delete a blog
  const handleDelete = (_id) => {
    const URL = `https://winsports-server.vercel.app//blogs/${_id}`;
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

  //scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-5 mt-20">
        <h1 className="text-2xl md:text-2xl font-semibold">Search Blog...</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by blog name"
          className="p-2 mb-4 border rounded-md w-1/2"
        />
      </div>
      <Categories></Categories>
      {updatedBlogs && updatedBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3  gap-3 max-w-5xl mx-auto mb-20">
          {updatedBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              addToWishlist={addToWishList}
              handleDelete={handleDelete}
            ></BlogCard>
          ))}
        </div>
      ) : (
        <div className="felx justify-center items-center mt-10">
          <Heading
            title={"No Blogs Found"}
            subTitle={"Please select other categories"}
            center
          />
          <div className="w-96  mx-auto">
            <Empty />
          </div>
        </div>
      )}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-10 right-10 bg-gray-800 text-white p-3 rounded-full cursor-pointer"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default AllBlogs;
