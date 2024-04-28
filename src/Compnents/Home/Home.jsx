import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import Banner from './Banner/Banner';
import Animation from './Annimation/Animation';
import Stats from './Stats';
import Features from './Features';
import GetInTouch from './Banner/GetInTouch/GetInTouch';
const Home = () => {
    return (
        <div>


          {/* banner section */}
        <div className='container mx-auto  md:grid md:grid-cols-2 gap-6 '>
          <div>
            <Animation></Animation>
          </div>
           <div>
            <Banner></Banner>
           </div>
           
           </div>

         <div className='mb-12 md:-translate-y-8'>
        <Stats></Stats>
      </div>

            <div>
              <Features></Features>
            </div>
             <div className='mb-6'>
              <GetInTouch></GetInTouch>
             </div>

        </div>
    );
};

export default Home;