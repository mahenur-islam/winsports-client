import React, { useEffect, useState } from "react";
import { Button, Card } from "flowbite-react";
import toast from "react-hot-toast";
const BlogCard = ({ blog }) => {
  const { _id, title, shortDescription, content, images, imagePreviewUrls } =
    blog;
  //delete a blog
  const handleDelete = (id) => {
    console.log(_id);
    const URL = `http://localhost:5000/blogs/${_id}`;
    fetch(URL, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount > 0){
            toast.success('Blog deleted successfully');
        }
      });
  };
  return (
    <div>
      <div>
       
      </div>
    </div>
  );
};

export default BlogCard;
