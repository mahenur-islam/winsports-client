import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        // Fetch wishlist data
        fetchWishlistData();
    }, []);

    const fetchWishlistData = async () => {
        try {
            const response = await fetch('http://localhost:5000/wishlist');
            if (response.ok) {
                const data = await response.json();

                // Check if there are items in the wishlist
                if (data.length > 0) {
                    setWishlist(data);
                } else {
                    toast.info('Wishlist is empty.');
                }
            } else {
                toast.error('Failed to fetch wishlist data');
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            {wishlist.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-20">
                    {wishlist.map((blog) => (
                        <div key={blog._id}>
                            <p>{blog.title}</p>
                        </div>
                    ))}
                </div>
            ) : (
                // Render a message or component when the wishlist is empty
                <p>Wishlist is empty.</p>
            )}
        </div>
    );
};

export default Wishlist;
