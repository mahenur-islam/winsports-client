import React from 'react';
import { Button } from 'flowbite-react';

const Category = ({category}) => {
    const {category_id, category_title} = category;
    // console.log(category);
    return (<div>
  <Button outline  className='hover:bg-transparent hover:text-white'>
      {category_title}
      </Button>
</div> 
    );
};

export default Category;