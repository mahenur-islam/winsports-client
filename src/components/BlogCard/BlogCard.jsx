// import React, { useEffect, useState } from "react";
import { Button, Card } from "flowbite-react";
import { MdDelete, MdAddCard } from "react-icons/md";
import { FaEdit, FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
const BlogCard = ({ blog, addToWishlist, handleDelete }) => {
  const {
    _id,
    title,
    shortDescription,
    details,
    category,
    image,
    currentTime,
  } = blog;
  return (
    <div>
      <div>
        <Card
          className="max-w-xl"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={image}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <div className="flex flex-wrap gap-5">
            <MdDelete
              onClick={() => handleDelete(blog._id)}
              className="text-2xl w-30 hover:bg-[#053B50] hover:text-white hover:p-1 hover:rounded-full"
            />
            <Link to={`/blogs/${blog._id}`}>
              <FaEdit  className="text-2xl hover:bg-[#053B50] hover:text-white hover:p-1 hover:rounded-full" />
            </Link>
            <Link onClick={() => addToWishlist(blog._id)}>
              <MdAddCard  className="text-2xl hover:bg-[#053B50] hover:text-white hover:p-1 hover:rounded-full"/>
            </Link>
            <Link to={`/blogs/${blog._id}/details`}>
              <FaBookReader className="text-2xl hover:bg-[#053B50] hover:text-white hover:p-1 hover:rounded-full" />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlogCard;
