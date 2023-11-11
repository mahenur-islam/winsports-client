import React from 'react';
import { Button } from 'flowbite-react';

const Category = ({category, categoryStyle}) => {
    const {category_id, category_title} = category;
    console.log(category);
    return (<div>
  <Button outline gradientDuoTone="purpleToBlue">
      {category_title}
      </Button>
</div> 
    );
};

export default Category;