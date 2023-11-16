import Banner from '../components/Banner/Banner';
import React, { useState, useEffect } from 'react';
import Newsletter from '../components/Newsletter/Newsletter';
import RecentPost from '../components/RecentPost/RecentPost';



const Home = () => {

    const [recentBlogs, setRecentBlogs] = useState([]);

    useEffect(() => {
      // Fetch recent blogs when the component mounts
      fetch('http://localhost:5000/blogs')
        .then((response) => response.json())
        .then((data) => setRecentBlogs(data))
        .catch((error) => console.error('Error fetching recent blogs:', error));
    }, []);

    return ( 
        <div>
            <Banner></Banner>
            <RecentPost blogs={recentBlogs} />
            <Newsletter></Newsletter>

        </div>
    );
};

export default Home;