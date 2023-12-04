import React from "react";
import { Card } from "flowbite-react";
import { MdDelete, MdAddCard } from "react-icons/md";
import { FaEdit, FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, addToWishlist, handleDelete }) => {
  const {
    _id,
    title,
    shortDescription,
    category,
    image,
  } = blog;

  return (
    <div>
      <Card className="max-w-md group flex flex-col justify-between h-full">
        <div className="grow flex flex-col gap-2 justify-between">
          <img
            src={image}
            alt={title}
            className="group-hover:scale-110 rounded-lg w-full h-40 object-cover"
          />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <h5 className="tracking-tight text-gray-500 dark:text-white">
            {shortDescription}
          </h5>
          <p className="text-blue-600 font-bold w-20 rounded-lg">{category}</p>
        </div>
        <div className="flex flex-wrap gap-5 grow">
          <MdDelete
            onClick={() => handleDelete(blog._id)}
            className="text-2xl w-30 hover:bg-red-400  hover:text-white hover:p-1 hover:rounded-full"
          />
          <Link to={`/blogs/${blog._id}`}>
            <FaEdit className="text-2xl hover:bg-red-400 hover:text-white hover:p-1 hover:rounded-full" />
          </Link>
          <Link onClick={() => addToWishlist(blog._id)}>
            <MdAddCard className="text-2xl hover:bg-red-400 hover:text-white hover:p-1 hover:rounded-full" />
          </Link>
          <Link to={`/blogs/${blog._id}/details`}>
            <FaBookReader className="text-2xl hover:bg-red-400 hover:text-white hover:p-1 hover:rounded-full" />
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;
