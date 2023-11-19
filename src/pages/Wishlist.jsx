import React, { useState, useEffect } from "react";
import { Button, Card } from "flowbite-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  console.log(wishlist)

  useEffect(() => {
    fetchWishlistData();
  }, []);

  const fetchWishlistData = async () => {
    try {
      const response = await fetch("http://localhost:5000/wishlist");
      if (response.ok) {
        const data = await response.json();

        // Check if there are items in the wishlist
        if (data.length > 0) {
          setWishlist(data);
        } else {
          toast.info("Wishlist is empty.");
        }
      } else {
        toast.error("Failed to fetch wishlist data");
      }
    } catch (error) {
      console.error("Error fetching wishlist data:", error);
    }
  };

  const handleDelete = (_id) => {
    const URL = `http://localhost:5000/wishlist/${_id}`;
    fetch(URL, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const filteredData = wishlist.filter((item) => item._id !== _id);
          setWishlist(filteredData);
          toast.success("Blog deleted successfully");
        } else {
          toast.error("Failed to delete blog");
        }
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
        toast.error("Error deleting blog");
      });
  };
  

  return (
    <div>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-20">
          {wishlist.map((blog) => (
            <div key={blog._id}>
              <Card className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {blog.shortDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Button onClick={() => handleDelete(blog._id)}>Delete</Button>
                  <Link to={`/blogs/${blog._id}/details`}>
                    <Button>Show Details</Button>
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <p>Wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
