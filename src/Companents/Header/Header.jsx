import React from 'react'
import '../Header/Header.css'
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const Header = () => {
  return (
    <>
    <div className='zindex'>
    <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      > 

      <div className='parallaxele'>
                <SwiperSlide className="swipper1">
        <div class="swiper-slide slide silde-1">
                    <div class="slider-caption">
                        
                        <h1>Graduate Admissions</h1>
                        <p>The perfect to create a stunning online presentation</p>
                        <button class="btn-custom">READ MORE</button>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide className="swipper2">
          
        <div class="swiper-slide slide silde-1">
                    <div class="slider-caption">
                        
                        <h1>Graduate Admissions</h1>
                        <p>The perfect to create a stunning online presentation</p>
                        <button class="btn-custom">READ MORE</button>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide className="swipper3">
        <div class="swiper-slide slide silde-1">
                    <div class="slider-caption">
                        
                        <h1>Graduate Admissions</h1>
                        <p>The perfect to create a stunning online presentation</p>
                        <button class="btn-custom">READ MORE</button>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide className='swipper4'>
        <div class="swiper-slide slide silde-1">
                    <div class="slider-caption">
                        
                        <h1>Graduate Admissions</h1>
                        <p>The perfect to create a stunning online presentation</p>
                        <button class="btn-custom">READ MORE</button>
                    </div>
                </div>
        </SwiperSlide>
      </div>

      </Swiper>
    </div>
    
    
    
    </>
  )
}

export default Header