import React, { useEffect, useState } from "react";
import Categories from "../components/Categories/Categories";
import { useLoaderData, useSearchParams } from "react-router-dom";
import BlogCard from "../components/blogCard/blogCard";
import useAddToWishList from "../hooks/useAddToWishList";
import toast from "react-hot-toast";
import Heading from "../components/Heading/Heading";
import Empty from "../components/Cover/Empty";
// import Category from "../components/Category/Category";

const AllBlogs = () => {
  const blogs = useLoaderData();
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
      {blogs && blogs.length > 0 ? (
        <div>
          <div className="flex justify-center items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by blog name"
              className="p-2 mb-4 border rounded-md"
            />
          </div>
          <Categories></Categories>

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
        </div>
      ) : (
        <div className="felx justify-center items-center mt-10">
          <Heading
            title={"No Blogs Found"}
            subTitle={"Please select other categories"}
            center
          />
          <div className="w-96  mx-auto"><Empty /></div>
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
