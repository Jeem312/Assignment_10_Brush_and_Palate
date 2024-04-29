
import { Typewriter } from 'react-simple-typewriter'
import Banner from './Banner/Banner';
import Animation from './Annimation/Animation';
import Stats from './Stats';
import Features from './Features';
import GetInTouch from './Banner/GetInTouch/GetInTouch';

import { useLoaderData } from 'react-router-dom';

import CraftIteam from './CraftIteam/CraftIteam';
const Home = () => {
  const craftCards = useLoaderData();
 
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
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3' style={{backgroundImage: `url(https://i.postimg.cc/054C3y4S/top-view-composition-with-art-concept.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',borderRadius:'10px'}}>
            {
              craftCards.map(craftCard =><CraftIteam key={craftCard._id} craftCard={craftCard}></CraftIteam>)
             }
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