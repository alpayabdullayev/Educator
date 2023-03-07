import React from 'react'
import '../Footer/Footer.css'
import {BsTelephoneInbound} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'
import MAP from '../../img/Footer/Map.png'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <section  className=" px-lg-5 bgfooter">
        <div className="container">
            <div className="row ptfooter">
                <div className=" col-12 col-sm-6 col-md-3 ">
                    <h4 className='h4footer pt-3'>Educate</h4>
                    <p className='pfooter pt-4 pb-4'>Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home</p>
                    <span className='spanfooter ' ><BsTelephoneInbound/>   <span>1-677-124-44227</span></span> <br />
                    <span className='spanfooter'><BiTimeFive/> <span>Mon - Sat 8.00 - 18.00</span></span> 
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                    <h4 className='h4footer ps-2 pt-3'>Latest News</h4>
                    <div className='pt-3 ps-2'>
                    <a className='afooter ' href="">Graduate Admissions</a> <br />
                    <small> <p className='p2footer' >by Craig Murphy</p> </small> 

                    <a className='afooter' href="">Continuing Education</a> <br />
                    <small> <p className='p2footer'>by Craig Murphy</p> </small>

                    <a className='afooter' href="">Current Students</a> <br />
                    <small> <p className='p2footer'>by Craig Murphy</p> </small>
                    </div>
                    


                </div>
                <div className="col-12 col-md-3 col-sm-6">
                    <h4 className='h4footer ps-4 pt-3'>Useful Links</h4>
                    <div>
                        <ul>
                            <li className='pt-2 pb-2'><a className='afooter' href="">Popular Courses</a></li>
                            <li className='pt-2 pb-2'><a className='afooter' href="">Forums</a></li>
                            <li className='pt-2 pb-2'><a className='afooter' href="">Our Teachers</a></li>
                            <li className='pt-2 pb-2'><a className='afooter' href="">Upcoming Events</a></li>
                            <li className='pt-2'><a className='afooter' href="">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-6">
                    <h4 className='h4footer ps-4 pt-3'>Flexible learning</h4>
                    <div className='pt-2'>
                        <img  src={MAP} alt="" />
                    </div>
                </div>
            </div>

            <div className="footer-bottom pt-3">
                <div className="row">
                    <div className="col-12 col-md-6 ps-4">
                        <p>&copy;2017 QODE INTERACTIVE, ALL RIGHTS RESERVED</p>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-evenly footer-bootom-right">
                        <p>CALL +44 300 303 0266</p>
                        <p>FOLLOW US</p>
                        <a  href=""><span className='ikonsfb'><AiOutlineFacebook/></span></a>
                        <a  href=""><span className='ikonsins'><AiOutlineInstagram/></span></a>
                        <a  href=""><span className='ikonsli'><AiFillLinkedin/></span></a>
                        <a  href=""><span className='ikonsgi'><AiFillGithub/></span></a>

                    </div>
                </div>

            </div>
        </div>
    </section>    

    </>
  )
}

export default Footer