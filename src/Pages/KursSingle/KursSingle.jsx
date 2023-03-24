import React from 'react'
import '../KursSingle/KursSingle.css'


import TopNavbar from '../../Companents/TopNavbar/TopNavbar'
import WhiteNavbar from '../../Companents/WhiteNavbar/WhiteNavbar'
import Button from '../../Companents/Button/Button'
 
import {Link} from 'react-router-dom'

import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {BsLinkedin} from 'react-icons/bs'
import {FaPinterestP} from 'react-icons/fa'
import {FcAlarmClock} from 'react-icons/fc'
import {FaBell} from 'react-icons/fa'
import {MdQuiz} from 'react-icons/md'
import {HiUserGroup} from 'react-icons/hi'
import {FaGraduationCap} from 'react-icons/fa'
import {MdVerifiedUser} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FcBusinessContact} from 'react-icons/fc'
import SearchButton from '../../Companents/SearchButton/SearchButton'

import LotiiMessage from '../../lottiee.json'
import Lottie from 'react-lottie-player'



import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import Footer from '../../Companents/Footer/Footer'



const KursSingle = () => {
  return (
    <>
    
    <TopNavbar />
    <WhiteNavbar />
    

    <section  className="bgFaq para">
          <div className="container">
            <div className='d-flex justify-content-between titlefaq '>
              <h1 className='faqh1'>Development</h1>
              <span className='right-title text-dark'><Link className='linkfaq ' to="/">Home</Link> / Development</span>
            </div>
          </div>
    </section>

    <section className="full-height px-lg-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-9">
                    <div className="course-single__title">
                        <h1 className='title__h1 '>Development</h1>
                    </div>
                    <div className="all d-flex justify-content-between">

                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="left-title__coursesingle d-flex pt-3 pb-3">
                            <div className="left-title__coursesingle-img">
                                <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1678285206/instructor-img-1_yah6hq.jpg" alt="" />
                            </div>
                            <div className="left-title__coursesingle-info ps-4 left__single" >
                                <h5 className='info__h5'>Instructor:</h5>
                                <p className='info__p'>Amy Drufesne</p>
                            </div>
                            <div className="left-title__coursesingle-info ps-4">
                                <h5 className='info__h5'>Categories:</h5>
                                <p className='info__p'>It & Software</p>
                            </div>


                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 pb-3 ">

                        <div className="all-right pt-3 d-flex justify-content-end">
                        <div className="right-title__coursesingle-info pe-4 ">
                            <h4 className='mt-2 value65'>$65</h4>
                        </div>
                        <button className='Button'> VIEW CARD</button>
                        </div>
                        
                    </div>
                    </div>

                    <div className="coursesingle-full-img">
                        <div className="col9img">
                            <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1679131475/course-img-1_ky1pmy.jpg" alt="" />
                        </div>
                    </div>

                    <div className="coursesingle__content pt-4">
                        <h1 className='content__h1'>About this course</h1>
                        <p className='content__p pt-2'>Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.</p>
                        <p className='content__p'>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>

                        <span className='content__span-share'><span className='share'>Share</span>  <span className='fb__color'><FaFacebookF/></span> <span className='tw__color'><BsTwitter/></span> <span className='go__color'><FcGoogle/></span> <span className='li__color'><BsLinkedin/></span> <span className='pi__color'><FaPinterestP/></span> </span>
                    </div>


                    <div className="FAQS__course pt-5">
                        <div className="FAQs__title">
                            <h1 className='content__h1 pb-3'>FAQs</h1>
                        </div>
                        <div className="faqs__accordion-course">
                        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       <span className='accordion__span'> Can I just enroll in a single course? I'm not interested in the entire Specialization.</span> 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='ps-5 acordion__p'>
                    Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <span className='accordion__span'>What is the refund policy?</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='ps-5 acordion__p'>
                    Pri ferri lorem ea, ei feugiat democritum mei. Vide veri nec cu. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       <span className='accordion__span'>What background knowledge is necessary?</span> 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='ps-5 acordion__p'>
                    Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       <span className='accordion__span'> Do I need to take the courses in a specific order?.</span> 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='ps-5 acordion__p'>
                    Pri ferri lorem ea, ei feugiat democritum mei. Vide veri nec cu. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
                        </div>
                    </div>

                    






                    
                </div>
                
                
                
                
                
                
                <div className="col-12 col-md-3 ">
                    <div className="right__col3 ">
                        <div className="Features ps-2 pt-2">
                            <div className="Features__title">
                                <h3 className='content__h3 pb-4 pt-3'>Course Features</h3>
                            </div>
                            <div className="features__infos">
                                <div className="features__info d-flex justify-content-between">
                                    <p> <span className='pe-2'><FcAlarmClock/></span> Duration </p> 
                                    <p>2 hours</p>
                                </div>
                                <div className="features__info d-flex justify-content-between">
                                    <p> <span className='pe-2 text-primary'><FaBell/></span> Duration </p> 
                                    <p>2 hours</p>
                                </div>
                                <div className="features__info d-flex justify-content-between">
                                    <p> <span className='pe-2 text-danger'><MdQuiz/></span> Duration </p> 
                                    <p>2 hours</p>
                                </div>
                                <div className="features__info d-flex justify-content-between">
                                    <p> <span className='pe-2 text-info'><HiUserGroup/></span> Duration </p> 
                                    <p>2 hours</p>
                                </div>
                                <div className="features__info d-flex justify-content-between">
                                    <p> <span className='pe-2 text-dark'><FaGraduationCap/></span> Duration </p> 
                                    <p>2 hours</p>
                                </div>
                                <div className="features__info d-flex justify-content-between">
                                    <p> <span className='pe-2 text-success'><MdVerifiedUser/></span> Duration </p> 
                                    <p>2 hours</p>
                                </div>
                                <div className="features__info d-flex justify-content-between">
                                    <p> <span className='pe-2 text-warning'><AiFillStar/></span> Duration </p> 
                                    <p>2 hours</p>
                                </div>

                            </div>
                        </div>


                        <div className="Features ps-2 pt-3">
                            <div className="Features__title">
                                <h3 className='content__h3 pb-4 pt-3'>Related Courses</h3>
                            </div>
                            <div className="Related-infos">
                                <div className="related__info">
                                    <div className="row">
                                        <div className="col-12 col-md-6 pt-4">
                                            <div className="related-img">
                                                
                                            <div className="kart pt-3">
                                                <div className="kart-image">
                                                <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1678361670/p-2_zhpucy.jpg" alt="" />
                                                </div>
                                            </div>    

                                               
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 pt-5">
                                            <div className="inforeal">
                                                <p className='pt-2 inforeal__p'>Fun Yoga for Toddlers</p>
                                                <p className='text-primary'>$190</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 pt-4">
                                            <div className="related-img">

                                            <div className="kart pt-3">
                                                <div className="kart-image">
                                                <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1678551613/event-6_vyfm8n.jpg" alt="" />
                                                </div>
                                            </div>

                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 pt-5">
                                            <div className="inforeal">
                                                <p className='pt-2 inforeal__p'>After School Sport</p>
                                                <p className='text-primary'>$220</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 pt-4">
                                            <div className="related-img">

                                            <div className="kart pt-3">
                                                <div className="kart-image">
                                                <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1678553070/event-13_qaaxii.jpg" alt="" />
                                                </div>
                                            </div>


                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 pt-5">
                                            <div className="inforeal">
                                                <p className='pt-2 inforeal__p'>Little Champions</p>
                                                <p className='text-primary'>$310</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="Features__title pt-3">
                                <h3 className='content__h3  pt-3'>Contact Us</h3>
                                <div className="col-md-3">
                                      <Link className='insta__logoo' to="/contact">
                                       <span className='fs-1 ps-4'>
                                       <Lottie
                        loop
                        animationData={LotiiMessage}
                        play
                        style={{ width: 60, height: 60 }}
                    />
                                        </span> 
                                </Link>
                                </div>
                              
                            </div>
                            <div className="Features__title pt-3">
                                <h3 className='content__h3 pb-4 pt-3'>Search</h3>
                                <span className='search__blog'><SearchButton/></span>
                              
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

export default KursSingle