
import { Typewriter } from 'react-simple-typewriter'
import Banner from './Banner/Banner';
import Animation from './Annimation/Animation';
import Stats from './Stats';
import Features from './Features';
import GetInTouch from './Banner/GetInTouch/GetInTouch';
import { useLoaderData } from 'react-router-dom';
import CraftCards from './CraftCards/CraftCards';
import { RotatingLines } from 'react-loader-spinner'



const Home = () => {
const craftInfos = useLoaderData()

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
          <div>
          render(<RotatingLines
  visible={true}
  height="96"
  width="96"
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />)
          </div>



      </div>
      <h1 className='flex flex-col justify-center items-center text-4xl text-teal-600 my-6 font-extrabold'>Our Art & Craft Iteams</h1>
      <p className='text-center my-4 text-gray-400'>Indulge your creative spirit with our curated selection of artisanal supplies and DIY essentials. From vibrant paints to intricate tools, discover the perfect materials to bring your artistic visions to life. Unleash your imagination today!</p>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3' style={{backgroundImage: `url(https://i.postimg.cc/054C3y4S/top-view-composition-with-art-concept.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',borderRadius:'10px'}}>
        
          {
            craftInfos.slice(13,19).map(craftInfo=><CraftCards key={craftInfo._id} craftInfo={craftInfo}></CraftCards>)
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