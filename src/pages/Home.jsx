import Banner from '../components/Banner/Banner';
import React, { useState } from 'react';
import RecentBlog from '../components/RecentBlog/RecentBlog';
import Newsletter from '../components/Newsletter/Newsletter';

const Home = () => {

    return ( 
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Newsletter></Newsletter>

        </div>
    );
};

export default Home;