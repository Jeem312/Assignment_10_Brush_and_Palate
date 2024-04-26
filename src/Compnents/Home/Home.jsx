import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import Banner from './Banner/Banner';
import Animation from './Annimation/Animation';
import Stats from './Stats';
const Home = () => {
    return (
        <div>


          {/* banner section */}
        <div className='container mx-auto bg-teal-100 md:grid md:grid-cols-2 gap-6 '>
          <div>
            <Animation></Animation>
          </div>
           <div>
            <Banner></Banner>
           </div>
           
             

            
           </div>

         {/* extra route 1 */}
         <div className='mb-12 md:-translate-y-8'>
        <Stats></Stats>
      </div>

        </div>
    );
};

export default Home;