import React from "react";
import { Link, useLoaderData  } from "react-router-dom";
import Comments from "../Comments/Comments";
import { Button } from "flowbite-react";

const BlogDetails = () => {
  const blog = useLoaderData();
  const paragraphs = blog.details.split("\n").map((paragraph, index) => (
    <p key={index} className="md:text-xl text-gray-700 pb-4">
      {paragraph}
    </p>
  ));

  return (
    <div>
      <div className="w-2/3 mx-auto text-justify mt-10 p-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-10 text-[#053B50] p-3">
            {blog.title}
          </h1>
        </div>
        <div className="">
          <img src={blog.image} className="rounded-lg mb-5" />
          <h1 className=" bg-green-300 inline rounded-md p-2 font-semibold text-orange-500">
            {blog.category}
          </h1>
        </div>
        <div>
          <h4 className="mt-10 mb-5 text-lg text-left font-semibold text-gray-700">
            {blog.shortDescription}
          </h4>
          <h1 className="md:text-xl text-gray-700 pb-20"> {paragraphs}</h1>
        </div>
      </div>
      <Button className="text-center mx-auto"><Link to='/allblog' >Continue to All Blogs</Link></Button>
      <div className="max-w-4xl mx-auto">
      {/* TODO: Comment will show here */}
        Show Comments
      </div>
      <div className="max-w-2xl mx-auto mt-10">
        <Comments blog={blog} />
      </div>
      
    </div>
  );
};

export default BlogDetails;
