import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm} from "react-hook-form"
const Update = () => {
    const {id} = useParams();
   console.log(id)
    const {
		
		register,
		handleSubmit} = useForm()

      const onSubmit = (data) => {
        console.log(data);
        const {name,Photo_Url,Email,Item_name,subcategory_Name,description,processing_time,customization,rating,price,stockStatus,}=data;
		

		const updatedInfo = {name,Photo_Url ,Email,Item_name,subcategory_Name,description,processing_time,customization,rating,price,stockStatus,}
		fetch(`http://localhost:5000/updateIteam/${id}`,{
           method:'PATCH',
           headers:{
            'content-type':'application/json'
           },
           body:JSON.stringify(updatedInfo)
          })
          .catch(error=>{
            console.log(error);
         }) 
		
        
      
}

    return (
       <section className="p-6  dark:text-gray-900 bg-teal-100 border border-b-teal-400" style={{backgroundImage: `url(https://i.postimg.cc/054C3y4S/top-view-composition-with-art-concept.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',borderRadius:'10px'}}>
            <div className="space-y-2 flex justify-center items-center">
				<h1 className="font-semibold text-2xl text-teal-400">Add Art & Craft Item</h1>
				
			</div>
	<form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="container flex flex-col mx-auto lg:justify-center lg:items-center lg:ml-36  space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">User Name</label>
					<input id="firstname" type="text" placeholder="First name" name='name' className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"   {...register("name")}/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname"  className="text-sm">Photo_Url</label>
					<input id="lastname" name='photo' type="text" placeholder="Last name" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                      {...register("Photo_Url")}/>
				</div>
				
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" name='email' type="email" placeholder="Email" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"    {...register("Email")}/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Item_name</label>
					<input id="firstname" name='iteam_name' type="text" placeholder="First name" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"      {...register("Item_name")}/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city"  className="text-sm">Subcategory_Name</label>
					<input id="city" name='subcategory_Name' type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  {...register("subcategory_Name")}/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">Stock-Status</label>
					<input id="state" name='stockStatus' type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"   {...register("stockStatus")}/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">Price</label>
					<input id="zip" name='price' type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"   {...register("price")}/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city"  className="text-sm">Rating</label>
					<input id="city" name='rating' type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  {...register("rating")} />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">Customization</label>
					<input id="state" name='customization' type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  {...register("customization")} />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">Processing_time</label>
					<input id="zip" name='processing_time' type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"   {...register("processing_time")}/>
				</div>
                <div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Description</label>
					<textarea id="bio" placeholder="" name='description' className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"    {...register("description")}/>
				</div>
                <div className=" col-span-full bg-teal-400 border  rounded-lg">
					
					<input type="submit" value="Add Iteam" className="w-full p-3 rounded-lg  "   />
				</div>
			</div>
          
		</fieldset>
		
	</form>
</section>
    );
};

export default Update;