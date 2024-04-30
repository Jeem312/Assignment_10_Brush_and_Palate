import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({info}) => {
   
    const {_id,
        image,
        item_name,
        subcategory_name,
        short_description } = info;
    return (
        
            <Link to={`/categoryCards/${subcategory_name}`}>
            <div className="max-w-xs  p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 ml-6 md:ml-20">
	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-64 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Name:{item_name}</span>
		<h2 className=" font-semibold tracking-wide">SubCategory:{subcategory_name}</h2>
	</div>
	<p className="dark:text-gray-800">{short_description}</p>
</div>
            
            </Link>


    );
};

export default Card;