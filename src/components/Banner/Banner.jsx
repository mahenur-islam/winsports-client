import React from 'react';
import { Carousel, Button } from 'flowbite-react';

const Banner = () => {
    return (
        <div className="h-[300px] md:h-[500px] lg:h-[600px] relative">
            <Carousel slideInterval={8000}>
                <div className="relative">
                    <img src="https://i.ibb.co/7C7wqTc/pexels-mike-1171084.jpg" alt="..." className='w-full'/>
                </div>
                <div className="relative">
                    <img src="https://i.ibb.co/rx8qRyt/pexels-tembela-bohle-1884574.jpg" alt="..." className='w-full'/>
                </div>
                <div className="relative">
                    <img src="https://i.ibb.co/QNTwGJ8/pexels-roger-lagesse-2745827.jpg" alt="..." className='w-full'/>
                </div>
                <div className="relative">
                    <img src="https://i.ibb.co/cDQyBsb/Tennis-4-min.jpg" alt="..." className='w-full'/>
                </div>
                <div className="relative">
                    <img src="https://i.ibb.co/NNZCthV/Rugby-1-min.jpg" alt="..." className='w-full'/>
                </div>
                <div className="relative">
                    <img src="https://i.ibb.co/6BY7gDF/Boxing-1-min.jpg" alt="..." className='w-full'/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
