const Categories = () => {
  const categoryStyle = {
    backgroundImage:
      'url("https://i.ibb.co/N7GgY7M/ezgif-com-video-to-gif.gif")',
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div>
      <h1>Categories</h1>
      <div
        className="relative w-40 h-40 md:w-64 md:h-64 bg-black rounded-full mt-10 mx-auto"
        style={categoryStyle}
      >
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
          <h1 className="text-3xl font-bold">Cricket</h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
