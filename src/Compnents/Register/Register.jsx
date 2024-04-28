import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm} from "react-hook-form";
import { AuthContext } from '../../Provider/Provider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const [registerError , setRegisterError] =useState('');
const {  createUser,updateUserProfile} =useContext(AuthContext);


    const {
		register,
    reset,
		formState: { errors },
		handleSubmit,} = useForm()

      const onSubmit = (data) => {
        
        const {email,password,Name, image} = data;
      if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
       toast.error("Password must have at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long");
          return;
        }
        
        
        createUser(email,password)
        .then(result=>{
          console.log(result.user);
          toast('Register Successfully');
          updateUserProfile(Name, image);
          reset()
          
        })
        .catch((error) => {
       
          console.log(error.message);
          
        });
      
      }
    return (
        <>
      <div className="hero min-h-screen bg-teal-100 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-teal-900">Register now!</h1>
           
          </div>
          <form    onSubmit={handleSubmit(onSubmit)}
           
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label text-teal-800">
                  <span className="label-text">Full Name</span>
                </label>
                <input name='name'
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                 
                  {...register("Name", { required: true })} />
                  {errors.Name && <span className='text-red-400'>This field is required</span>}
               
              </div>
              <div className="form-control">
                <label className="label text-teal-800">
                  <span className="label-text">Email</span>
                </label>
                <input name='email'
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                 
                  {...register("email", { required: true })} />
                  {errors.email && <span className='text-red-400'>This field is required</span>}
               
              </div>
              <div className="form-control ">
                <label className="label text-teal-800">
                  <span className="label-text">Image Url</span>
                </label>
                <input name='image'
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  {...register("image")} />
                 
                 
              </div>
              <div className="form-contro ">
                <label className="label ">
                  <span className="lebel-text ">Password</span>
                </label>
                <input name='password'
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                 
                  {...register("password", { required: true })} />
                  {errors.password && <span className='text-red-400'>This field is required</span>}
               
              </div>
          
              <div className="form-control mt-6 p-0">
                <button className="border border-teal-400 rounded-lg p-3 bg-teal-50">Register</button>
              </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/signin" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
              
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
    );
};

export default Register;