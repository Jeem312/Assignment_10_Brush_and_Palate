import React from 'react';
import { Link } from 'react-router-dom';

const CraftTable = ({craftInfo}) => {
    console.log(craftInfo);
    const {_id,name,Photo_Url,Item_name,price,rating,stockStatus,customization,subcategory_Name} = craftInfo;
    return (
        <div  >
        <div className="overflow-x-auto bg-base-100">
 <table className="table">
   {/* head */}
   <thead>
     <tr>
       <th></th>
       <th>User Name</th>
       <th>Item Name</th>
       <th>SubCategory</th>
       <th>Customization</th>
       <th>stockStatus</th>
       <th>View Details</th>
     </tr>
   </thead>
   <tbody>
    
      <tr>
       <th></th>
       <td>{name}</td>
       <td>{Item_name}</td>
       <td>{subcategory_Name}</td>
       <td>{stockStatus}</td>
       <td>{customization}</td>
       <td><Link to={`/details/${_id}`}><button className='btn btn-sm bg-base-200'>Details</button></Link></td>  
     </tr>
    
   </tbody>
 </table>
</div>
       </div>
    );
};

export default CraftTable;