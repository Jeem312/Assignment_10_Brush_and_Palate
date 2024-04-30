import React from 'react';
import Navbar from '../Compnents/NavBar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Compnents/Footer/Footer';
import { RotatingLines } from 'react-loader-spinner';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
           <Navbar></Navbar>
     
      {
        navigation.state === "loading"?  <div className='flex justify-center items-center' >
        <RotatingLines
visible={true}
height="96"
width="96"
color="#14B8A6"
strokeWidth="5"
animationDuration="0.75"
ariaLabel="rotating-lines-loading"
wrapperStyle={{}}
wrapperClass=""

/>
        </div> :  <Outlet></Outlet> 
       }
      
          
           
           <Footer></Footer>
        </div>
    );
};

export default Root;