import React from 'react'
import {CiLocationOn} from 'react-icons/ci'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {IoCalendarOutline} from 'react-icons/io5'
import {AiOutlineHome} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'

const EventsList = ({EventsListbasligi,EventsListdate,EventsListImgsi,EventsListinfo,EventsListqiymet,EventsListadres,EventsListtime,EventsListvenue}) => {
  return (
      <>          {/*<div className='kart__div pt-5'></div>*/}
                    <div className="col-12 col-lg-6 col-md-12 pt-5 " >
                        <div className="kart pt-1 ">
                            <div className="kart-image "> 
                                <a href="">
                                    <img src={EventsListImgsi} alt="" />
                                    <div className="kart-date">
                                        <div className="kart-date-time">
                                            <h3>10</h3>
                                            <h5>Oct</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>    
                    </div> 

                    <div className="col-12 col-lg-6 col-md-12 pt-5">
                    <div className="kart-bottom kart__bottom">
                            <div className="kart-h3">
                                <h3 className='styleh3  '>
                                    <a href="">{EventsListbasligi}</a>
                                </h3>
                            </div>
                            <div className="kart-info ">
                                <p>{EventsListqiymet}</p>
                                <div className="kart-info-date    d-flex">
                                   <span><IoCalendarOutline/> </span>  <span><p className='ps-2 '> {EventsListdate}</p></span>
                                </div>
                                <div className="kart-info-adres d-flex">
                                     <span><AiOutlineClockCircle/> </span><span><p className='ps-2 pt-1 '>{EventsListtime}</p></span>
                                </div>

                                <div className="kart-info-adres d-flex">
                                     <span><AiOutlineHome/> </span><span><p className='ps-2 pt-1 '>{EventsListvenue}</p></span>
                                </div>

                                <div className="kart-info-adres d-flex">
                                     <span><GoLocation/> </span><span><p className='ps-2 pt-1 '>{EventsListadres}</p></span>
                                </div>

                                <p className=''>{EventsListinfo}</p>
                            </div>
                        </div>
                    </div>   
    
    
    
    </>
  )
}

export default EventsList