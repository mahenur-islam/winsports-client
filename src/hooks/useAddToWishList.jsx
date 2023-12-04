// useAddToWishList.js
import { toast } from 'react-hot-toast'; 

const useAddToWishList = () => {
  // Function to add a blog to the wishlist
  const addToWishlist = async (blogId) => {
    try {
      const response = await fetch(`https://winsports-server.vercel.app/wishlist/${blogId}`, {
        method: "POST",
      });

      if (response.ok) {
        toast.success("Blog added to wishlist");
      } else {
        toast.error("Failed to add blog to wishlist");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding blog to wishlist");
    }
  };
  return addToWishlist;
};

export default useAddToWishList;
