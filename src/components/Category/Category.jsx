import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string'


const Category = ({categoryItem, selected}) => {
    const {label, icon: Icon} = categoryItem;
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const handleClick = ()=>{
        let currentQuery = {};
        if(params){
            currentQuery = qs.parse(params.toString());
        }
            const updatedQuery = {...currentQuery, category: label}
            const url = qs.stringifyUrl({
                url: '',
                query: updatedQuery,
            })
            navigate(url);
        

    }
    return (<div className={`'flex flex-col items-center justify-center gap-2 p-3 border-b-2 transition cursor-pointer ${selected ? "border-b-neutral-800 text-neutral-800":"border-transparent text-neutral-500"}'`} onClick={handleClick}>
    <Icon size={26} />
    <div className='text-sm font-medium'>{label}</div>
</div> 
    );
};

export default Category;