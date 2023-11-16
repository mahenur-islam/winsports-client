// import React, { useEffect, useState } from "react";
import { Button, Card } from "flowbite-react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const BlogCard = ({ blog, addToWishlist, handleDelete }) => {
  const {_id , title, shortDescription, details, category, image, currentTime } =
    blog;
  return (
    <div>
      <div>
        <Card className="max-w-sm" key={_id}>
          <img src={image} alt=""/>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <h5 className="tracking-tight text-gray-400 dark:text-white">
            {category}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {shortDescription}
          </p>
         <MdDelete onClick={() => handleDelete(blog._id)}  className="hover:cursor-pointer hover:text-red-500 text-xl"/>
          <Link to={`/blogs/${blog._id}`}>
          <FaEdit className="hover:text-cyan-600 text-xl"/>
          </Link>
          <Button onClick={() => addToWishlist(blog._id)}>
            Add to wishlist
          </Button>
          <Link to={`/blogs/${blog._id}/details`}>
            <Button>Show Details</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default BlogCard;
