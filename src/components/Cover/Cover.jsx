import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ image }) => {
  return (
    <div>
      <Parallax
        blur={{min: -50, max: 10}}
        bgImage={image}
        strength={500}
        className="hero"
        style={{
          height: '60vh', 
          width: '100%', 
        }}
      >
        <div className="bg-opacity-60"></div>
        <div className="text-center">
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
