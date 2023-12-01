import { useEffect, useState } from "react";
import Category from "../Category/Category";
import { categories } from "../../../public/CategoriesData";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get('category');
  console.log(category);

  return (
    <div className="max-w-6xl mx-auto">
      <h1>Categories {categories.length}</h1>
  
      <div className="flex justify-center items-center gap-3 my-10">
        {
          categories.map(categoryItem => <Category key={categoryItem.icon} categoryItem={categoryItem} selected = {category === categoryItem.label}/>
          )
        }
      </div>
      </div>
  );
};

export default Categories;


