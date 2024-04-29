import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { info } from 'autoprefixer';

import CrafrCard from './CrafrCard';

const MyArtCraft = () => {
    const {user} = useContext(AuthContext);
    
    const [infos,setInfos] =useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/mycart/${user?.email}`)
        .then(res=>res.json())
        .then((data)=>{console.log(data);
        setInfos(data);})

    },[user])
    
    return (
        <div className='bg-base-100 gap-6 grid grid-cols-1 mb-6 md:grid-cols-2'>
          
          
              {
                infos.map(info=><CrafrCard key={info._id} info={info}></CrafrCard>)
              }

           </div>
    );
};

export default MyArtCraft;