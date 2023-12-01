import React from "react";

const Heading = ({ title, subTitle, center }) => {
  return (
    <div className={center ? 'text-center': 'text-left'}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-xl font-semibold text-neutral-500">{subTitle}</div>
    </div>
  );
};

export default Heading;
