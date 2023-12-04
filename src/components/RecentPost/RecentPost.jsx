import React from "react";
import { Button, Card } from "flowbite-react";
import useAddToWishList from "../../hooks/useAddToWishList";
import { Link } from "react-router-dom";

const RecentPost = ({ blogs }) => {
  console.log(blogs);
  if (!Array.isArray(blogs)) {
    return <p>Loading...</p>;
  }

  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.currentTime) - new Date(a.currentTime)
  );
  console.log(sortedBlogs);

  const addToWishList = useAddToWishList();

  const truncateText = (text, maxLength) => {
    return text
      .split(" ")
      .slice(0, maxLength)
      .join(" ");
  };

  const limitedBlogs = sortedBlogs.slice(0, 6);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center md:text-3xl pt-10">Recent Posts</h2>
      <div className="h-[1px] max-w-xl mx-auto bg-black"></div>
      <div className="max-w-7xl my-10 mx-auto p-5 grid grid-cols-1 md:grid-cols-3 gap-2">
        {limitedBlogs.map((blog) => (
          <div key={blog._id} className="flex">
            <Card className="w-11/12 my-5 mx-2 shadow-xl flex flex-col justify-between">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full rounded-md"
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {truncateText(blog.shortDescription, 30)}
              </p>
              <p className="text-blue-500 font-bold dark:text-gray-400 grow">
                {blog.category}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link to={`/blogs/${blog._id}/details`}>
                  <Button className="w-full">Show Details</Button>
                </Link>
                <Button
                  className="outline"
                  onClick={() => addToWishList(blog._id)}
                >
                  Add to wishlist
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/allblog">
          <Button>Read more ...</Button>
        </Link>
      </div>
    </div>
  );
};

export default RecentPost;
