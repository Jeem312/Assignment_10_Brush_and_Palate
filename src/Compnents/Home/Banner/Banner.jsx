
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='my-20' style={{ borderRadius: '10px', overflow: 'hidden'}}>
             <Swiper  autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
             pagination={true} modules={[Autoplay,Pagination]} className="mySwiper">
       
        <SwiperSlide><img src="https://i.postimg.cc/Y91bMsFj/roman-kraft-WOz-Vqzp-Scrk-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/ZRR5h12x/fallon-michael-IP59z0-FXBu-Y-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/J751t7c4/pexels-jadson-thomas-164235-542556.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/rs6Kjc9m/pexels-dzeninalukac-1469902.jpg" alt="" /></SwiperSlide>
       
       
      </Swiper>
        </div>
    );
};

export default Banner;