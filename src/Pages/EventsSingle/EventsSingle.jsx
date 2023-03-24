import React from 'react'
import '../EventsSingle/EventsSingle.css'

//Komponent
import TopNavbar from '../../Companents/TopNavbar/TopNavbar'
import WhiteNavbar from '../../Companents/WhiteNavbar/WhiteNavbar'

//Router-dom
import {Link} from 'react-router-dom'

//icon
import {AiOutlineClockCircle} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {IoCalendarOutline} from 'react-icons/io5'
import {AiOutlineHome} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'

//komponent
import Button from '../../Companents/Button2/Button2'

//img
import EventImg from '../EventsSingle/event-1.jpg'
import Footer from '../../Companents/Footer/Footer'

//lotie
import Lottie from 'react-lottie-player'
import CalendarLottie from '../../calendar.json'


const EventsSingle = () => {
  return (
    <>
    <TopNavbar/>
    <WhiteNavbar/>

    <section  className="bgFaq para">
          <div className="container">
            <div className='d-flex justify-content-between titlefaq'>
              <h1 className='faqh1'>English with Natives</h1>
              <span className='right-title text-dark'><Link className='linkfaq ' to="/">Home</Link> Events</span>
            </div>
          </div>
    </section>

    <section  className="full-height px-lg-5 ">
        <div className="container">
            <div className="event-single-top d-flex justify-content-between flex-wrap">
                <div className="left-event-side d-flex">
                  <div className="kart-datee">
                      <div className="kart-date-timee">
                          <h3>10</h3>
                          <h5>Oct</h5>
                      </div>
                  </div>
                  <div className="divklas d-flex justify-content-around">
                      <div className="events-single__text ps-4">
                        <h2 className='events-single__h2'> English with Natives</h2>
                       <span><span className='events-single__span '><AiOutlineClockCircle/> <span>OCTOBER 10, 2024 @ 8:30 AM - OCTOBER 10, 2029 @ 3:00 PM</span></span></span> 
                      
                      </div>
                      <div className="divloo">
                         <span><Lottie
                            loop
                            animationData={CalendarLottie}
                            play
                            style={{ width: 100, height: 100 }}
                          /></span> 
                      </div>
                  </div>

            </div>
            <div className="right-event-side pt-2">

            <Button butonunIcindekiYazi=''  classAdi='Button ' ButtonunLinki='https://calendar.google.com/calendar/u/0/r'/>
            </div>
            
            </div>



            <div className="row pt-5">
                  <div className="col-12 col-md-6">
                    
                    <div className="kart pt-3">
                      <div className="kart-image">
                        <img src={EventImg} alt="" />
                      </div>
                    </div>  
                  </div>
                  <div className="col-12 col-md-6 pt-3">
                    
                  <iframe width="636" height="387" id="gmap_canvas" src="https://maps.google.com/maps?q=yeni%20gunesli&t=&z=13&ie=UTF8&iwloc=&output=embed"  scrolling="no" fr></iframe>
                  </div>
                  <p className='pt-5'>Lorem ipsum oin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. </p>
            </div>

            <div className="event-single__bottom pt-4">
              <div className="event-single-bottom-title">
                <h4 className='event-single-bottom-h4'>
                  Event Details
                </h4>
              </div>
              <div className="event-single-details pt-4">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="kart-info ">
                                
                                <div className="kart-info-date    d-flex">
                                   <span><IoCalendarOutline/> </span>  <span><p className='ps-2 '> DATE: October 10, 2024 @ 8:30 am - October 10, 2029 @ 3:00 pm</p></span>
                                </div>
                                <div className="kart-info-adres d-flex">
                                     <span><AiOutlineClockCircle/> </span><span><p className='ps-2 pt-1 '>TIME: 8:30 am - 3:00 pm</p></span>
                                </div>

                                <div className="kart-info-adres d-flex">
                                     <span><AiOutlineHome/> </span><span><p className='ps-2 pt-1 '>VENUE: Sports Centre</p></span>
                                </div>

                                <div className="kart-info-adres d-flex">
                                     <span><GoLocation/> </span><span><p className='ps-2 pt-1 '>ADDRESS: 244 Lisgar St Toronto</p></span>
                                </div>
                    </div>
                    <div className="col-12 col-md-6">
                                <div className="kart-info-adres d-flex">
                                  <span><AiOutlineUser/></span> <span><p className='ps-2 pt-1'>ORGANIZER NAME: Harvard Education</p></span>
                                </div>
                    </div>
                </div>
                </div>
              </div>
            </div>




        </div>


    </section>

    <Footer/>



    
    
    
    </>
  )
}

export default EventsSingle