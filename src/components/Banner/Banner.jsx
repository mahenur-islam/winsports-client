import React from 'react';
import { Carousel, Button } from 'flowbite-react';

const Banner = () => {
    return (
        <div className="h-[300px] md:h-[500px] lg:h-[600px] relative">
            <Carousel slideInterval={8000}>
                <div className="relative">
                    <img src="https://i.ibb.co/VSn9DH6/pexels-anil-sharma-16062163.jpg" alt="..." className='w-full'/>
                    <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                        <h1 className="text-3xl font-bold">This is carousel1</h1>
                        <p className="text-lg">Your carousel text goes here.</p>
                        <Button className="mt-4">Learn More</Button>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://i.ibb.co/rcY2Jhs/pexels-bono-tsang-7932148.jpg " alt="..." className='w-full'/>
                    <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                        <h1 className="text-3xl font-bold">This is carousel1</h1>
                        <p className="text-lg">Your carousel text goes here.</p>
                        <Button className="mt-4">Learn More</Button>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://i.ibb.co/njnQXy7/pexels-pixabay-207361.jpg " alt="..." className='w-full'/>
                    <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                        <h1 className="text-3xl font-bold">This is carousel1</h1>
                        <p className="text-lg">Your carousel text goes here.</p>
                        <Button className="mt-4">Learn More</Button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
