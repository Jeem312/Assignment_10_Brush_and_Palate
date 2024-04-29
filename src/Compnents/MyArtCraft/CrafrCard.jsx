import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CrafrCard = ({info}) => {
 const [items ,setItems]= useState(info)
    console.log(info)
    const handleDelete=(_id)=>{
        console.log('deleted',_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             

              fetch(`http://localhost:5000/mycart/${_id}`,{
                method:'DELETE'
              })
              .then(res => res.json())
              .then(data =>{
                console.log(data);
                const remainingIteam = info.filter(item=> item._id !== _id);
                setItems(remainingIteam);
                 if(data.deletedCount >0){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your Item has been deleted.",
                    icon: "success"
                  });
                 }
              })
            }
          });
    }
    return (
        <div>
           
         <div className="card w-full mr-4s bg-base-100 shadow-xl ">
  <figure><img src={info?.Photo_Url} alt="Shoes" className='max-h-72 w-fit' /></figure>
  <div className="card-body">
    <h2 className="card-title">{info?.Item_name}</h2>
     
 
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
    <div className="card-actions justify-between">
    <Link to={`/update/:${info?._id}`}>  <button className="btn bg-teal-400 text-teal-900 ">Update</button></Link>
      <button onClick={()=>handleDelete(info?._id)} className="btn btn-error">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CrafrCard;