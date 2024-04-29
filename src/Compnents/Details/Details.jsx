import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    const [info,setInfo] = useState()
   useEffect(()=>{
    fetch(`http://localhost:5000/craftDetails/${id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(info);
        setInfo(data);})
   },[id])
   
    return (
        <div className="">
        <div className="hero min-h-[calc(100vh-216px)]  bg-base-200">
<div className="hero-content flex-col lg:flex-row">
<img src={info?.Photo_Url} className="max-w-full rounded-lg shadow-2xl" />
<div>
 <div className="border my-4 border-b-gray-400"> <h1 className="text-5xl my-3 font-bold">{info?.Item_name}</h1>
 
    <div className="border my-4 border-b-gray-400">
 <p>SubCategory:{info?.subcategory_Name}</p>
    </div>
    <div> <p className=" my-5">Details:{info?.description}</p></div> 

   
<div className="border border-b-gray-400 mt-6"></div>
<div className="grid grid-cols-2">
<div className="font-bold my-3">
<p>
price:
</p>
<p>
stockStatus:
</p>
<p>
customization:
</p>
<p>
Rating: 
</p>
</div>
<div className="my-3">
<p>
{info?.price}
</p>
<p>
{info?.stockStatus}
</p>
<p>
{info?.customization}
</p>
<p>
{info?.rating} 
</p>
</div>



</div>
 
</div>
</div>
</div>
</div></div>
    );
};

export default Details;


