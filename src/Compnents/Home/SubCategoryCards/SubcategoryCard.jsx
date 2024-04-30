import React from 'react';
import { Link } from 'react-router-dom';

const SubcategoryCard = ({info}) => {
    console.log(info);
    return (
        <div>
             <div className="max-w-xs  p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 ml-6 md:ml-20">
	<img src={info?.image} alt="" className="object-cover object-center w-full rounded-md h-64 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Name:{info?.item_name}</span>
		<h2 className=" font-semibold tracking-wide">SubCategory:{info?.subcategory_name}</h2>
	</div>
	<p className="dark:text-gray-800">{info?.short_description}</p>
    <div className="border border-b-gray-400 my-4"></div>
    <div className='flex  justify-between'>
    <div className="flex ">
                 <img src="https://i.postimg.cc/vmpPp7Xp/star-3794158.png" alt="" className="h-4 mt-1 mx-1" />
                 <p>rating:{info?.rating}</p>
            </div>
            <div className="inline-flex ">
              <img src="https://i.postimg.cc/YCd5TdXX/price-tag-3462644.png" alt="" className="h-4 mt-1 mx-1" />
                 <p>price:{info?.price}</p>
              </div>
             
    </div>
    <div className="border border-b-gray-400 my-4"></div>
    <div  className="inline-flex space-x-2">
    <div className="inline-flex  ">
              <img src="https://i.postimg.cc/BnbYP4gg/timer.png" alt="" className="h-4 mt-1 mx-1" />
                 <p className=''>processing-time:{info?.processing_time}</p>
                 
              </div>
              <div><Link to={`categorydetails/${info?._id}`}><button className='btn btn-sm btn-accent'> details</button></Link></div>
    </div>
</div>
        
        </div>
    );
};

export default SubcategoryCard;