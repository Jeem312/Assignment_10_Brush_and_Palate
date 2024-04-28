import React from 'react';
import Lottie from "lottie-react";
import smsAnimation from './smsAnimation.json'
import Swal from 'sweetalert2';
import { Typewriter } from 'react-simple-typewriter'

const GetInTouch = () => {
	const handleSmsButton=()=>{
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "Thanks For Contacting Us",
			showConfirmButton: false,
			timer: 2000});

	}
    return (
        <div className='container mx-auto border border-teal-300  rounded-lg bg-teal-50'>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-6 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col justify-between">
		<div className="space-y-3">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl text-teal-400"> <Typewriter  words={['Lets Talk']} loop={15} typeSpeed={60} deleteSpeed={50} delaySpeed={1000} /></h2>
			<div className="dark:text-gray-600 mb-4">Reach out to us anytime. Drop a line, ask a question, or share your thoughts. we are here to connect.</div>
		</div>
       <div className='rounded-lg mt-3'>
       <Lottie  animationData={smsAnimation} />
       </div>
	</div>
	<form noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" required />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" required/>
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
		</div>
		<button onClick={handleSmsButton} type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded border border-teal-300 text-teal-400">Send Message</button>
	</form>
</div>
        </div>
    );
};

export default GetInTouch;