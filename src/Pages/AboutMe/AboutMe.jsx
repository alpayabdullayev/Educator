import React, {useState} from 'react'
import '../AboutMe/AboutMe.css'


import {Link} from 'react-router-dom'
import Footer from '../../Companents/Footer/Footer'
import {MdLocationOn} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {CgMail } from 'react-icons/cg'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import {FaFacebookF} from 'react-icons/fa'
import {SiVerizon} from 'react-icons/si'
import {SlGraduation} from 'react-icons/sl'
import {BiBook} from 'react-icons/bi'
import AboutMeCourses from '../AboutMe/AboutMeCourses'
import CoursesInfo from '../../Courses.json'
import TopNavbar from '../../Companents/TopNavbar/TopNavbar'
import WhiteNavbar from '../../Companents/WhiteNavbar/WhiteNavbar'




const AboutMe = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <>
    
   <TopNavbar/>
   <WhiteNavbar/>
    <section  className="bgFaq para">
          <div className="container">
            <div className='d-flex justify-content-between titlefaq '>
              <h1 className='faqh1'>Amy Drufesne</h1>
              <span className='right-title'><Link className='linkfaq' to="/">Home</Link> / Amy Drufesne</span>
            </div>
          </div>
    </section>

    <section  className="full-height px-lg-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3">
                    <div className="kart pt-3">
                         <div className="kart-image">
                            <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1678285206/instructor-img-1_yah6hq.jpg" alt="" />
                        </div>
                        <div className="kart-content">
                            <h3 className='aboutme-h3'> Army Drufse</h3>
                            <p className='aboutme-p'>Associate Professor</p>
                            <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.</p>
                             <span className='d-flex'>
                                <span ><MdLocationOn/></span> <p className='ps-2 pt-1'><span>22th West Ave, UT 84107</span> </p>
                            </span>

                            <span className='d-flex'>
                                <span ><BsFillTelephoneFill/></span> <p className='ps-2 pt-1'><span>22th West Ave, UT 84107</span> </p>
                            </span>

                            <span className='d-flex'>
                                <span className='fs-5' ><CgMail/></span> <p className='ps-2 pt-1'><span>educator@qode.com</span> </p>
                            </span>


                            <div className="social-icons-aboutme pt-3 ">
                                <div className="social-icon-aboutme">
                                    <span className='social-icons-facebook'> <a href=""><FaFacebookF/></a>  </span>
                                    <span className='ps-3 pe-3 social-icons-insta'> <a href=""><AiOutlineInstagram/></a>  </span>
                                    <span className='social-icons-linkedin'><a href=""><AiFillLinkedin/></a> </span>
                                </div>
                            </div>

                        </div> 


                    </div>
                       
                </div>
                <div className="col-12 col-md-9  pt-3">
                    <div className="bloc-tabs row pb-4 " data-aos="fade-right" data-aos-delay="100" >
                        <div className={toggleState === 1 ? "tabs active-tabs col-12 col-md-2" : "tabs col-12 col-md-2"} onClick={() => toggleTab(1)}>
                          <SlGraduation/> <span className='ps-2'>Biography</span> 
                        </div>
                        <div className={toggleState === 2 ? "tabs active-tabs col-12 col-md-2" : "tabs col-12 col-md-2"} onClick={() => toggleTab(2)}> 
                            <BiBook/> <span className='ps-2'> Syllabus</span> 
                        </div>
                    </div>

                    <div className="content-tabs" data-aos="fade-right" data-aos-delay="300">
                    <div className={toggleState === 1 ? "content active-content " : "content"}>
                        
                           
                                <h4 className='biography'>Biography</h4>
                                <p className='bio-p'>Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>

                                <p className='bio-p'>Class aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.
                                Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin</p>

                                <h4 className='biography pt-4'>About me</h4>
                                <p className='tap-aboutme-p pt-2'> <span className='verizon'><SiVerizon/></span> <span>We Enrich Lives Through Learning.</span> </p>
                                <p className='tap-aboutme-p'> <span className='verizon'><SiVerizon/></span> <span>Guiding the young generation to success.</span> </p>
                                <p className='tap-aboutme-p'> <span className='verizon'><SiVerizon/></span> <span>Learn to Play, Converse with Confidence</span> </p>
                                <p className='tap-aboutme-p'> <span className='verizon'><SiVerizon/></span> <span>We Enrich Lives Through Learning..</span> </p>
                                <p className='tap-aboutme-p'> <span className='verizon'><SiVerizon/></span> <span>Guiding the young generation to success.</span> </p>
                                <p className='tap-aboutme-p'> <span className='verizon'><SiVerizon/></span> <span>Learn to Play, Converse with Confidence</span> </p>

                        
                        
                    </div>

                    <div className="content-tabs wi" >
                        <div className={toggleState === 2 ? "content active-content " : "content"}>
                             <div className="row gy-4 row-cols-1 row-cols-md-3 g-4 wid">
                                
                        
                                {CoursesInfo.map((birMelumat) => (
                                    <AboutMeCourses
                                    Coursesbasligi={birMelumat.kurs_adi}
                                    Coursessahib={birMelumat.kurs_sahibi}
                                    CoursesImgsi={birMelumat.ImgUrl}
                                    Coursesinfo={birMelumat.kurs_info}
                                />
                                ))}


                                
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

export default AboutMe