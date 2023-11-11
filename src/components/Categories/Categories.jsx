import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const categoryStyle = {
    backgroundImage:
      'url("https://i.ibb.co/N7GgY7M/ezgif-com-video-to-gif.gif")',
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const [categories, setCategories] =useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/category')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])
  return (
    <div>
      <h1>Categories</h1>
      <h1>Categories: {categories.length}</h1>

      <div className="flex my-10">
        {
          categories.map(category => <Category key={category.category_id} category={category} categoryStyle={categoryStyle}/>
          )
        }
      </div>
      </div>
  );
};

export default Categories;


