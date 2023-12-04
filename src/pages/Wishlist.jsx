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
      const response = await fetch("https://winsports-server.vercel.app/wishlist");
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
;

  const handleDelete = (_id) => {
    const URL = `https://winsports-server.vercel.app/wishlist/${_id}`;
    fetch(URL, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const filteredData = wishlist.filter((item) => item._id !== _id);
          setWishlist(filteredData);
          toast.success("Blog removed from wishlist successfully");
        } else {
          toast.error(data.error || "Failed to remove blog from wishlist");
        }
      })
      .catch((error) => {
        console.error("Error removing blog from wishlist:", error);
        toast.error("Error removing blog from wishlist");
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
                <p className="text-blue-600 font-bold  w-20 rounded-lg">{blog.category}</p>
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
