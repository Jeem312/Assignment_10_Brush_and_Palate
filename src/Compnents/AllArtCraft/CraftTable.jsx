import React from 'react';

const CraftTable = ({craftInfo}) => {
    console.log(craftInfo);
    const {name,Photo_Url,Item_name,price,rating,stockStatus,customization,subcategory_Name} = craftInfo;
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
       <th>Category</th>
       <th>Customize</th>
       <th>Details</th>
     </tr>
   </thead>
   <tbody>
    
      <tr>
       <th></th>
       <td>{name}</td>
       <td>{Item_name}</td>
       <td>{subcategory_Name}</td>
       <td>{customization}</td>
       <td><button className='btn btn-sm bg-base-200'>Details</button></td>  
     </tr>
    
   </tbody>
 </table>
</div>
       </div>
    );
};

export default CraftTable;