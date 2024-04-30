import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CraftTable from './CraftTable';



const AllArtCraft = () => {
    
    const craftInfos =useLoaderData();
    console.log(craftInfos)
  
    return (
        <div>
             {
                craftInfos.slice(10,100).map(craftInfo=><CraftTable key={craftInfo._id} craftInfo={craftInfo}></CraftTable>)
             }
           
        </div>
    );
};

export default AllArtCraft;