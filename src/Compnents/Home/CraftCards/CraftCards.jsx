import React from 'react';
import 'animate.css'
import { Link } from 'react-router-dom';

const CraftCards = ({craftInfo}) => {
   
    
       
          const  {_id,
            Photo_Url,
            Item_name,price,rating,stockStatus,} = craftInfo;
    
    return (
        <div className="animate_animated animatebackInLeft animateslower	3s animate_delay-2s	2s max-w-xs p-6 border border-teal-400 my-6 ml-6 md:ml-20 rounded-md shadow-md  dark:bg-gray-50 dark:text-gray-900">
        <img src={Photo_Url} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
      
  
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{Item_name}</span>
        </div>
        <div className="flex ">
                 <img src="https://i.postimg.cc/vmpPp7Xp/star-3794158.png" alt="" className="h-4 mt-1 mx-1" />
                 <p>rating:{rating}</p>
            </div>
            <div className="inline-flex ">
              <img src="https://i.postimg.cc/W4hmkr3W/approval-13082365.png" alt="" className="h-4 mt-1 mx-1" />
                 <p>stock-Status:{stockStatus}</p>
              </div>
              <div className="flex justify-center items-center">
              <Link to={`/details/${_id}`}> <button className="btn boder border-teal-300 bg-base-200 text-teal-700">View Details</button></Link></div>
  
        </div>
  
    );
};

export default CraftCards;