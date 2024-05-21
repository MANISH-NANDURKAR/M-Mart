import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './BannerCard.css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div >
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>slide 1</SwiperSlide>
        <SwiperSlide>slide 2</SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        
 
      </Swiper>
    </div>
  )
}

export default BannerCard
