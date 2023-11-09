import Banner from '../components/Banner/Banner';
import React from 'react';
import RecentBlog from '../components/RecentBlog/RecentBlog';
import Categories from '../components/Categories/Categories';
import Newsletter from '../components/Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Categories></Categories>
            <Newsletter></Newsletter>

        </div>
    );
};

export default Home;