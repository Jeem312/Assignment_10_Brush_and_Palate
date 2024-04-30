import { info } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SubcategoryCard from './SubcategoryCard';


const SubCategoryCards = () => {
    const {id} = useParams();
    const [infos,setInfos] = useState([])
   useEffect(()=>{
    fetch(`http://localhost:5000/categories/${id}`)
    .then(res=>res.json())
    .then(data=>{
       
        setInfos(data);
        })
   },[id])
  
    return (
        <div className='bg-base-200 my-6 p-4 grid grid-cols-1 md:grid-cols-2'>
           {
            infos.map(info=><SubcategoryCard key={info._id} info={info}></SubcategoryCard>
               )
           }
        </div>
    );
};

export default SubCategoryCards;