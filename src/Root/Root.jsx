import React from 'react';
import Navbar from '../Compnents/NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Compnents/Footer/Footer';

const Root = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet> 
           
           <Footer></Footer>
        </div>
    );
};

export default Root;