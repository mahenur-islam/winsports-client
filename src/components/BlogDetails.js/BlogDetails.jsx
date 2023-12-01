import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blog = useLoaderData();

  return (
    <div className="w-2/3 mx-auto text-justify mt-10 shadow-2xl shadow-gray-400 p-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-10 text-[#053B50] p-3">
          {blog.title}
        </h1>
      </div>
      <div className="">
        <img src={blog.image} className="rounded-lg mb-5" />
        <h1 className=" bg-green-300 inline rounded-md p-2 font-semibold text-orange-500">{blog.category}</h1>
      </div>
      <div>
        <h4 className="mt-10 mb-5 text-lg text-left font-semibold text-gray-700">{blog.shortDescription}</h4>
        <h1 className="md:text-xl text-gray-700 pb-20">{blog.details}</h1>
      </div>
    </div>
  );
};

export default BlogDetails;

{
  /* <h1>{blog.title}</h1>
      <p>{blog.shortDescription}</p>
      <p>{blog.details}</p> */
}
