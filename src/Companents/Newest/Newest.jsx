import React from 'react'
import '../Newest/Newest.css'
import Newest1 from '../../img/Newest/event-8.jpg'
import Newest2 from '../../img/Newest/event-7.jpg'
import Newest3 from '../../img/Newest/event-9.jpg'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'

const Newest = () => {
  return (
    <section  className="full-height px-lg-5">
        <div className="container">

            <div className="row justify-content-center text-center" data-aos="fade-up">
                <div className="col-lg-8 pb-4" >
                    <h1 className="fw-bold">Newest Events</h1>
                    <p className='paraqraf'>Etiam porttitor risus massa nec condiment gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat
                    </p>
                </div>
            </div>

            <div class="row gy-4">
                <div className="col-12 col-md-4 " data-aos="fade-up">
                    <div className="kart pt-2">
                        <div className="kart-image">
                            <a href="">
                                <img src={Newest1} alt="" />
                                <div className="kart-date">
                                    <div className="kart-date-time">
                                        <h3>10</h3>
                                        <h5>Oct</h5>
                                    </div>
                                </div>
                            
                               
                            </a>
                        </div>

                        <div className="kart-bottom">
                            <div className="kart-h3">
                                <h3 className='styleh3 pt-4 '>
                                    <a href="">Let’s Talk Science</a>
                                </h3>
                            </div>
                            <div className="kart-info pt-2">
                                <div className="kart-info-date pt-2   d-flex">
                                   <span><AiOutlineClockCircle/> </span>  <span><p className='ps-2 '>October 10, 2024 @ 9:00 am - October 10, 2029 @ 9:00 am</p></span>
                                </div>
                                <div className="kart-info-adres d-flex">
                                     <span><CiLocationOn/> </span><span><p className='ps-2 pt-1 '>24 Wiley Ave, East York</p></span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="kart pt-2">
                        <div className="kart-image">
                            <a href="">
                                <img src={Newest3} alt="" />
                                <div className="kart-date">
                                    <div className="kart-date-time">
                                        <h3>10</h3>
                                        <h5>Oct</h5>
                                    </div>
                                </div>
                            
                               
                            </a>
                        </div>

                        <div className="kart-bottom">
                            <div className="kart-h3">
                                <h3 className='styleh3 pt-4 '>
                                    <a href="">Painting Festival</a>
                                </h3>
                            </div>
                            <div className="kart-info pt-2">
                                <div className="kart-info-date pt-2   d-flex">
                                   <span><AiOutlineClockCircle/> </span>  <span><p className='ps-2 '> October 10, 2024 @ 10:00 am - October 10, 2029 @ 6:00 pm</p></span>
                                </div>
                                <div className="kart-info-adres d-flex">
                                     <span><CiLocationOn/> </span><span><p className='ps-2 pt-1 '>354 Shuter St Toronto</p></span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="col-12 col-md-4" data-aos="fade-up" data-aos-delay="600">
                <div className="kart pt-2">
                        <div className="kart-image">
                            <a href="">
                                <img src={Newest2} alt="" />
                                <div className="kart-date">
                                    <div className="kart-date-time">
                                        <h3>10</h3>
                                        <h5>Oct</h5>
                                    </div>
                                </div>
                            
                               
                            </a>
                        </div>

                        <div className="kart-bottom">
                            <div className="kart-h3">
                                <h3 className='styleh3 pt-4 '>
                                    <a href="">Graduation</a>
                                </h3>
                            </div>
                            <div className="kart-info pt-2">
                                <div className="kart-info-date pt-2   d-flex">
                                   <span><AiOutlineClockCircle/> </span>  <span><p className='ps-2 '> November 22, 2024 @ 10:00 am - November 22, 2029 @ 9:00 pm</p></span>
                                </div>
                                <div className="kart-info-adres d-flex">
                                     <span><CiLocationOn/> </span><span><p className='ps-2 pt-1 '>24 Wiley Ave, East York</p></span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>


        </div> 
    </section>           
  )
}

export default Newest