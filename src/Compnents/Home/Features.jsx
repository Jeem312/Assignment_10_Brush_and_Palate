import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter';
const Features = () => {
    return (
        <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <Fade  cascade damping={1e-1}>
        <h2 className="text-5xl font-bold text-teal-600"> <Typewriter  words={['The Proccess For Sucess']} loop={15} typeSpeed={60} deleteSpeed={50} delaySpeed={1000} /></h2>
      </Fade>
            <p className="text-gray-400">Discover a world where imagination meets craftsmanship. Explore our curated collection of unique, handmade treasures for your creative journey.</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-4">
            <div className='bg-teal-100 rounded-full p-2'><img src="https://i.postimg.cc/tJpXYM4Y/message-5031861.png" alt="" className="w-8 h-8 "/></div>
                <h3 className="my-3 text-3xl font-semibold text-teal-600">Reserch</h3>
                <div className="space-y-1 leading-tight">
                    <p className='text-gray-400'>Delve into our extensive research library for insights, inspiration, and knowledge to fuel your creative endeavors and projects.</p>
                   
                </div>
            </div>
           
           
       
            <div className="flex flex-col items-center p-4">
            <div className='bg-teal-100 rounded-full p-2'><img src="https://i.postimg.cc/bJtLQRq1/email-6325437.png" alt="" className="w-8 h-8 "/></div>
                <h3 className="my-3 text-3xl font-semibold text-teal-600">Support</h3>
                <div className="space-y-1 leading-tight">
                    <p className='text-gray-400'>Count on our dedicated support team for prompt assistance and guidance throughout your journey in the world of art and craft.</p>
                   
                </div>
            </div>
           
           
       
            <div className="flex flex-col items-center p-4">
            <div className='bg-teal-100 rounded-full p-2'><img src="https://i.postimg.cc/c4bgSGR4/new-product-4129528.png" alt="" className="w-8 h-8 "/></div>
                <h3 className="my-3 text-3xl font-semibold text-teal-600">Product</h3>
                <div className="space-y-1 leading-tight">
                    <p className='text-gray-400'>Discover our eclectic product range, meticulously crafted to inspire and enhance your artistic endeavors with quality and innovation.</p>
                   
                </div>
            </div>
           
           
       
            <div className="flex flex-col items-center p-4">
            <div className='bg-teal-100 rounded-full p-2'><img src="https://i.postimg.cc/L8kpVz8K/bullhorn-1998087.png" alt="" className="w-8 h-8 "/></div>
                <h3 className="my-3 text-3xl font-semibold text-teal-600 ">Marketing</h3>
                <div className="space-y-1 leading-tight">
                    <p className='text-gray-400'>Elevate your brand with our targeted marketing solutions, designed to amplify your presence and captivate your audience effectively.</p>
                   
                </div>
            </div>
          
           
    
            <div className="flex flex-col items-center p-4">
                <div className='bg-teal-100 rounded-full p-2'><img src="https://i.postimg.cc/Yqrsy3WM/measuring-2003805.png" alt="" className="w-8 h-8 "/></div>
                <h3 className="my-3 text-3xl font-semibold text-teal-600 ">Design</h3>
                <div className="space-y-1 leading-tight">
                    <p className='text-gray-400'>Transform your vision into reality with our cutting-edge design services, tailored to reflect your unique style and creativity seamlessly.</p>
                   
                </div>
            </div>
            <div className="flex flex-col items-center p-4">
                <div className='bg-teal-100 rounded-full p-2'><img src="https://i.postimg.cc/KjkRZLKz/strategy-3281374.png" alt="" className="w-8 h-8 "/></div>
                <h3 className="my-3 text-3xl font-semibold text-teal-600 ">Statergy</h3>
                <div className="space-y-1 leading-tight">
                    <p className='text-gray-400'>Craft a strategic roadmap tailored to your artistic goals, guiding you towards success in your creative pursuits and endeavors.</p>
                   
                </div>
            </div>
           
           
      
           
            </div>
           
           
    
    </section>
    );
};

export default Features;