import React from 'react'
import '../AXMED/axmed.css'
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const Axmed = () => {
  return (
    <>
    <div class="top-navbar">
        <ul class="left-side">
            <li class="left-side-items">
                <a href="#">Student Home</a>
            </li>
            <li class="left-side-items">
                <a href="#">Call +44 300 303 0266</a>
            </li>
            <li class="left-side-items">
                <a href="#">Follow Us</a>
            </li> 
            <li class="left-side-items">
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </li>

        </ul>
        <ul class="right-side">
            <li class="right-side-items">
                <a href="#">English</a>
            </li>
            <li class="right-side-items">
                <a href="#">Login</a>
            </li>
            <li class="right-side-items">
                <a href="#">Register</a>
            </li>

        </ul>
    </div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                {/* <img src="./assets/img/logo-light.png" alt="" class="light-image">
                <img src="./assets/img/logo-dark.png" alt="" class="dark-image active-display"> */}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Courses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Pages</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Elements</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            <i class="fa-solid fa-bars"></i>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>


    <header>
        <div class="slider swiper mySwiper">
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
            <div class="swiper-button-next swiper-button"></div>
            <div class="swiper-button-prev swiper-button"></div>
        </div>
    </header>
    
    </>
  )
}

export default Axmed