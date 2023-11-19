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

  const addToWishList = useAddToWishList(); // Correct import and use
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      <ul className="max-w-7xl my-10 mx-auto p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {sortedBlogs.map((blog) => (
          <div key={blog._id}>
            <Card className="max-w-sm my-5 mx-2 shadow-xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full rounded-md"
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {blog.shortDescription}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {blog.category}
              </p>
              <Link to={`/blogs/${blog._id}/details`}>
                <Button>Show Details</Button>
              </Link>
              <Button
                className="outline"
                onClick={() => addToWishList(blog._id)}
              >
                Add to wishlist
              </Button>
            </Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RecentPost;
