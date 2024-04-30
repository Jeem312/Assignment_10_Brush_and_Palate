import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const CategoryCards = () => {
    const [infos,setinfos]=useState([]);
 useEffect(()=>{
    fetch('http://localhost:5000/categories')
    .then(res=>res.json())
    .then(data =>{
      
        setinfos(data);
    })
 },[]

 )
    return (
        <div className='grid grid-cols-2 md:grid-cols-3  '>
        {
            infos.map(info=><Card key={info._id}info={info}></Card>)
        }
        </div>
    );
};

export default CategoryCards;