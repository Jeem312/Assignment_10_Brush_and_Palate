import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CraftTable from './CraftTable';

const AllArtCraft = () => {
    const craftInfos =useLoaderData();
   
  
    return (
        <div>
            
            {
                craftInfos.map(craftInfo=><CraftTable key={craftInfo._id} craftInfo={craftInfo}></CraftTable>)
            }
        </div>
    );
};

export default AllArtCraft;