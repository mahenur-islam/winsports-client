import { useEffect, useState } from "react";
import Category from "../Category/Category";
import { categories } from "../../../public/CategoriesData";

const Categories = () => {

  return (
    <div className="max-w-6xl mx-auto">
      <h1>Categories {categories.length}</h1>
  
      <div className="flex gap-3 my-10">
        {
          categories.map(category => <Category key={category.icon} category={category}/>
          )
        }
      </div>
      </div>
  );
};

export default Categories;


