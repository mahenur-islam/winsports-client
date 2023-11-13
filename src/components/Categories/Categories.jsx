import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/category')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])
  return (
    <div>
      <h1>Categories</h1>
  
      <div className="flex gap-3 my-10">
        {
          categories.map(category => <Category key={category.category_id} category={category}/>
          )
        }
      </div>
      </div>
  );
};

export default Categories;


