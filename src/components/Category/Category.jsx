import React from 'react';
import { Button } from 'flowbite-react';

const Category = ({category}) => {
    const {label, icon: Icon} = category;
    return (<div className='flex flex-col items-center justify-center gap-2 p-3 border-b-2 transition cursor-pointer'>
    <Icon size={26} />
    <div className='text-sm font-medium'>{label}</div>
</div> 
    );
};

export default Category;