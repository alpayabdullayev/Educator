import React from 'react'
import '../Header/Header.css'
import EducationLogo from '../../img/Header/h3-slider-image.png'

//React Moving Text
import MovingText from 'react-moving-text'
import EducationLogoo from '../../img/Header/h3-slider-image.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



const Header = () => {
    return (
        <header>
        <Swiper
            speed={1500}
            loop={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
                delay: 4500,
            }}
            className="mySwiper slider swiper"
        >

            <SwiperSlide className='slide silde-1'>
                <div class="slider-caption">
                    <MovingText
                        type="fadeInFromTop"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        <img src={EducationLogoo} alt="educationImage" className='education-image ' />
                        <h1>Graduate Admissions</h1>
                        <p>The perfect to create a stunning online presentation</p>
                        <a href="#" className='btn-custom'>Read More</a>

                    </MovingText>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide silde-2'>
                <div class="slider-caption">
                    <MovingText
                        type="fadeInFromTop"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        <img src={EducationLogoo} alt="educationImage" className='education-image ' />
                        <h1>Graduate Admissions</h1>
                        <p>The perfect to create a stunning online presentation</p>
                        <a href="#" className='btn-custom'>Read More</a>
                    </MovingText>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide silde-3'>
                <div class="slider-caption">
                    <MovingText
                        type="fadeInFromTop"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        <img src={EducationLogoo} alt="educationImage" className='education-image' />
                        <h1>Graduate Admissions</h1>
                        <p>The perfect to create a stunning online presentation</p>
                        <a href="#" className='btn-custom'>Read More</a>
                    </MovingText>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide silde-4'>
                <div class="slider-caption">
                    <MovingText
                        type="fadeInFromTop"
                        duration="1000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        <img src={EducationLogoo} alt="educationImage" className='education-image' />
                        <h1>Graduate Admissions</h1>
                        <p>The perfect to create a stunning online presentation</p>
                        <a href="#" className='btn-custom'>Read More</a>
                    </MovingText>
                </div>
            </SwiperSlide>

        </Swiper>
    </header>
    )
}

export default Header