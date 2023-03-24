import React from 'react'
import '../EventsList/EventsList.css'
import EventsList from '../EventsList/EventsList'

//Router-Dom
import {Link} from 'react-router-dom'

//Components
import TopNavbar from '../../Companents/TopNavbar/TopNavbar'
import WhiteNavbar from '../../Companents/WhiteNavbar/WhiteNavbar'

//Json
import EventsListInfo from '../../EventsListInfo.json'
import Footer from '../../Companents/Footer/Footer'

//lotie
import Lottie from 'react-lottie-player'
import CalendarLottie from '../../calendar.json'
const EventsListContainer = () => {
  return (
    <>

    {/* Components */}
    <TopNavbar/>
    <WhiteNavbar/>

        <section  className="bgFaq para">
          <div className="container">
            <div className='d-flex justify-content-between titlefaq '>
              <h1 className='faqh1'>Events List</h1>
              <span className='right-title text-dark'><Link className='linkfaq' to="/">Home</Link> / Events</span>
            </div>
          </div>
    </section>


    <div className='pt-5 oct'>
      <div className="container p-2 october">
        <div>
          <h1 className='h1__oct pt-4'>
            October 2024                          
          </h1>
          
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



    <section  className="full-height px-lg-5 ">
        <div className="container">
            <div className="row ">
            {EventsListInfo.map((birMelumat) => (
                  <EventsList
                    EventsListbasligi={birMelumat.eventslist_adi}
                    EventsListdate={birMelumat.eventslist_date}
                    EventsListImgsi={birMelumat.ImgUrl}
                    EventsListinfo={birMelumat.eventlist_info}
                    EventsListqiymet={birMelumat.eventlist_qiymet}
                    EventsListadres={birMelumat.eventlist_adress}
                    EventsListtime={birMelumat.eventlist_time}
                    EventsListvenue={birMelumat.eventlist_venue}
                  />
                ))}
            </div>
            
             <div className='d-flex justify-content-end pt-5 '>
                <h3>
                  <a href="">
                    Next Events
                  </a>
                </h3>
              </div> 
        </div>   

         
    </section>

    <Footer/>





    
    </>
  )
}

export default EventsListContainer