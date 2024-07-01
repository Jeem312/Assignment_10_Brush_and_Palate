import React from 'react';
import { useForm} from "react-hook-form"
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateIteam = () => {
const  info = useLoaderData();
const {_id,name,Photo_Url,Item_name,Email,price,rating,Processing_time,stockStatus,customization,description,subcategory_Name} = info;
    const {
		reset,
		register,
		handleSubmit} = useForm()

      const onSubmit = (data) => {
        console.log(data);
        const {name,Photo_Url,Email,Item_name,subcategory_Name,description,processing_time,customization,rating,price,stockStatus,}=data;
		

		const updatedInfo = {name,Photo_Url ,Email,Item_name,subcategory_Name,description,processing_time,customization,rating,price,stockStatus,}

        fetch(`https://asssignment-10-server-chi.vercel.app/CraftIteam/${_id}`,{
            method:'PUT',
            headers:{
				'content-type':'application/json' },
				body:JSON.stringify(updatedInfo)
           
            })
           .then(res => res.json())
           .then(data =>{
             console.log(data);
      
			if(data.modifiedCount>0){
				Swal.fire({
					title: 'success',
					text: 'Your Blog Updated Successfully',
					icon: 'success',
					confirmButtonText: 'Cool'
				}) }
           
              
            
            
              
          }) 
      
         }


    


    return (
    
        <section className="p-6  dark:text-gray-900 bg-teal-100 border border-b-teal-400"style={{backgroundImage: `url(https://i.postimg.cc/054C3y4S/top-view-composition-with-art-concept.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',borderRadius:'10px'}}>
            <div className="space-y-2 flex justify-center items-center">
				<h1 className="font-semibold text-2xl text-teal-400">Update Art & Craft Item:{Item_name}</h1>
				
			</div>
	<form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="container flex flex-col mx-auto lg:justify-center lg:items-center lg:ml-36  space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">User Name</label>
					<input id="firstname" defaultValue={name} type="text" placeholder="First name" name='name' className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"   {...register("name")}/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname"  className="text-sm">Photo_Url</label>
					<input id="lastname" defaultValue={Photo_Url} name='photo' type="text" placeholder="Photo_url" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                      {...register("Photo_Url")}/>
				</div>
				
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" defaultValue={Email} name='email' type="email" placeholder="Email" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"    {...register("Email")}/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Item_name</label>
					<input id="firstname" defaultValue={Item_name} name='iteam_name' type="text" placeholder="First name" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"      {...register("Item_name")}/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city"  className="text-sm">Subcategory_Name</label>
					<input id="city" defaultValue={subcategory_Name} name='subcategory_Name' type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  {...register("subcategory_Name")}/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">Stock-Status</label>
					<input id="state" defaultValue={stockStatus} name='stockStatus' type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"   {...register("stockStatus")}/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">Price</label>
					<input id="zip" defaultValue={price} name='price' type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"   {...register("price")}/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city"  className="text-sm">Rating</label>
					<input id="city" defaultValue={rating} name='rating' type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  {...register("rating")} />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">Customization</label>
					<input id="state" defaultValue={customization} name='customization' type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  {...register("customization")} />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">Processing_time</label>
					<input id="zip" defaultValue={Processing_time} name='processing_time' type="text" placeholder="" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"   {...register("processing_time")}/>
				</div>
                <div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Description</label>
					<textarea id="bio"  defaultValue={description} placeholder="" name='description' className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"    {...register("description")}/>
				</div>
                <div className=" col-span-full bg-teal-400 border  rounded-lg">
					
					<input type="submit" value="Update" className="w-full p-3 rounded-lg "/>
				</div>
			</div>
          
		</fieldset>
		
	</form>
</section>
    );
};

export default UpdateIteam;