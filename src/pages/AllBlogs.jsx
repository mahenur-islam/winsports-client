import React from "react";
import Categories from "../components/Categories/Categories";
import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

import { Button, Card } from "flowbite-react";
import toast from "react-hot-toast";

const AllBlogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  const [updatedBlogs, setUpdatedBlogs] = useState(blogs);

  //delete a blog
  const handleDelete = (_id) => {
    console.log(_id);
    const URL = `http://localhost:5000/blogs/${_id}`;
    fetch(URL, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const filteredData = updatedBlogs.filter((item) => item._id !== _id);
        setUpdatedBlogs(filteredData);
        if (data.deletedCount > 0) {
          toast.success("Blog deleted successfully");
        }
      });
  };
  return (
    <div>
      <Categories></Categories>
      <div>
        <h1 className="text-center mb-10">ALl blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-20">
          {updatedBlogs.map((blog) => (
            <Card className="max-w-sm" key={blog._id}>
              <img src={blog.imagePreviewUrls} alt="" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {blog.shortDescription}
              </p>
              <Button onClick={() => handleDelete(blog._id)}>Delete</Button>
                <Link to={`/blogs/${blog._id}`}><Button>Update</Button></Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
