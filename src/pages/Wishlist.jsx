import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Button, Card } from "flowbite-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Empty from "../components/Cover/Empty";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  console.log(wishlist);

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
          <p>Wishlist is empty</p>;
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
    <div className="max-w-6xl mx-auto">
      <div>
        <h1 className="text-sm md:text-xl lg:text-2xl font-semibold text-left py-10 mt-10">
          My <span className="text-[#053B50]">Wishlist</span>
          <div className="h-[0.5px]  bg-gray-300 w-full mt-2"></div>
        </h1>
      </div>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto mb-20">
          {wishlist.map((blog) => (
            <div key={blog._id}>
              <Card
                className="max-w-sm min-h-[50vh]"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={blog.image}
              >
              <div>
                <h3 className="font-semibold text-[#053B50] text-xl text-left mb-1">{blog.title}</h3>
                <p className="text-gray-700 bg-blue-200 inline rounded-lg px-1">{blog.category}</p>
              </div>
                <div className="grid grid-cols-1 gap-2">
                  <Button outline onClick={() => handleDelete(blog._id)}>
                    Delete
                  </Button>
                  <Link to={`/blogs/${blog._id}/details`}>
                    <Button className="w-full">
                      Read More
                      <FaArrowRight className="ml-1 mt-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-96 mx-auto">
          <Empty />
        </div>
      )}
    </div>
  );
};

export default Wishlist;
