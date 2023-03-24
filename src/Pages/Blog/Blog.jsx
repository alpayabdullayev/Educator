import React from 'react'
import '../Blog/Blog.css'

//komponent
import TopNavbar from '../../Companents/TopNavbar/TopNavbar'
import WhiteNavbar from '../../Companents/WhiteNavbar/WhiteNavbar'

//link
import {Link} from 'react-router-dom'

//icon
import{AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineTag} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {BsLinkedin} from 'react-icons/bs'
import {FaPinterestP} from 'react-icons/fa'
import SearchButton from '../../Companents/SearchButton/SearchButton'
import Footer from '../../Companents/Footer/Footer'
import {AiFillInstagram} from 'react-icons/ai'
import {FcBusinessContact} from 'react-icons/fc'
import Lottie from 'react-lottie-player'
import LotiiMessage from '../../lottiee.json'
import insta from '../../insta.json'

const Blog = () => {
  return (
    <>
   <TopNavbar/>
   <WhiteNavbar/>


   <section  className="bgblog para">
          <div className="container">
            <div className='d-flex justify-content-between titlecourseslist '>
              <h1 className='courseslisth1'>List With Sidebar</h1>
              <span className='right-title'><Link className='' to="/">Home</Link> / <span className='right-title'>List With Sidebar </span> </span>
            </div>
          </div>
    </section>   

    <section className="full-height px-lg-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-9">
                    <div className="standard__blog">
                        <div className="kart pt-3">
                            <div className="kart-image">
                                <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1679521733/blog-featured-1_kjsagv.jpg" alt="" />
                            </div>
                        </div> 
                        <h3 className='pt-4'>
                            <a className='h3_a' href="">Studying to accomplish the greatest goals</a>
                        </h3>   
                        <p className='pt-2 kursor1'>
                            <span>July 17, 2017</span>
                            <span className='ps-3 pe-3'><span><AiOutlineHeart/> 17</span>  </span>
                            <span> <AiOutlineTag/> Education</span>
                        </p>
                        <p className='pt-3 p__border pb-5'>
                        Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. 
                        </p>

                        <div className="share__blog-icon d-flex justify-content-between pb-5" >
                            <span className='content__span-share'><span className='share'>LIBRARY / PHYSICS</span>  </span>
                            <span className='ikons__social'>
                                <a href="">
                                    <span className='fb__color'><FaFacebookF/></span> 
                                </a>
                                <a href="">
                                    <span className='tw__color'><BsTwitter/></span>
                                </a>
                                <a href="">
                                    <span className='go__color'><FcGoogle/></span> 
                                </a>
                                <a href="">
                                    <span className='li__color'><BsLinkedin/></span> 
                                </a>
                                <a href="">
                                    <span className='pi__color'><FaPinterestP/></span> 
                                </a>
                                
                            </span>
                             
                        </div>


                        
                        


                        
                        
                    </div>

                    <div className="standard__blog pt-5">
                        <div className="kart pt-3">
                            <div className="kart-image object-fit-cover">
                                <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1678551612/event-12_ov1r2j.jpg" alt="" />
                            </div>
                        </div> 
                        <h3 className='pt-4'>
                            <a className='h3_a' href="">Science clubs for young researchers</a>
                        </h3>   
                        <p className='pt-2 kursor1'>
                            <span>July 17, 2017</span>
                            <span className='ps-3 pe-3'><span><AiOutlineHeart/> 17</span>  </span>
                            <span> <AiOutlineTag/> Education</span>
                        </p>
                        <p className='pt-3 p__border pb-5'>
                        Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. 
                        </p>

                        <div className="share__blog-icon d-flex justify-content-between pb-5" >
                            <span className='content__span-share'><span className='share'>LIBRARY / PHYSICS</span>  </span>
                            <span className='ikons__social'>
                                <a href="">
                                    <span className='fb__color'><FaFacebookF/></span> 
                                </a>
                                <a href="">
                                    <span className='tw__color'><BsTwitter/></span>
                                </a>
                                <a href="">
                                    <span className='go__color'><FcGoogle/></span> 
                                </a>
                                <a href="">
                                    <span className='li__color'><BsLinkedin/></span> 
                                </a>
                                <a href="">
                                    <span className='pi__color'><FaPinterestP/></span> 
                                </a>
                                
                            </span>
                             
                        </div>

                        <div className="coments__blog">
                            <div className="coments__blog-content p-3 ps-5">
                                <h3 className='pt-3'>
                                    <a className='h3_a' href="">Spend your time in best way.</a>
                                </h3>
                                <p className='pt-2 kursor1 kursor__border pb-5'>
                                    <span>July 17, 2017</span>
                                    <span className='ps-3 pe-3'><span><AiOutlineHeart/> 17</span>  </span>
                                    <span> <AiOutlineTag/> Education</span>
                                </p>
                                <div className="share__blog-icon d-flex justify-content-between pb-1  " >
                            <span className='content__span-share'><span className='share'>LECTURE / LIBRARY</span>  </span>
                            <span className='ikons__social'>
                                <a href="">
                                    <span className='fb__color'><FaFacebookF/></span> 
                                </a>
                                <a href="">
                                    <span className='tw__color'><BsTwitter/></span>
                                </a>
                                <a href="">
                                    <span className='go__color'><FcGoogle/></span> 
                                </a>
                                <a href="">
                                    <span className='li__color'><BsLinkedin/></span> 
                                </a>
                                <a href="">
                                    <span className='pi__color'><FaPinterestP/></span> 
                                </a>
                                
                            </span>
                             
                        </div>

                            </div>

                        </div>
                        
                        


                        
                        
                    </div>

                    <div className="standard__blog pt-5">
                        <div className="kart pt-3">
                            <div className="kart-image object-fit-cover">
                                <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1679526324/blog-featured-4_ku5lza.jpg" alt="" />
                            </div>
                        </div> 
                        <h3 className='pt-4'>
                            <a className='h3_a' href="">Sport teams are great activity routine</a>
                        </h3>   
                        <p className='pt-2 kursor1'>
                            <span>July 17, 2017</span>
                            <span className='ps-3 pe-3'><span><AiOutlineHeart/> 17</span>  </span>
                            <span> <AiOutlineTag/> Education</span>
                        </p>
                        <p className='pt-3 p__border pb-5'>
                        Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. 
                        </p>

                        <div className="share__blog-icon d-flex justify-content-between pb-5" >
                            <span className='content__span-share'><span className='share'>LIBRARY / PHYSICS</span>  </span>
                            <span className='ikons__social'>
                                <a href="">
                                    <span className='fb__color'><FaFacebookF/></span> 
                                </a>
                                <a href="">
                                    <span className='tw__color'><BsTwitter/></span>
                                </a>
                                <a href="">
                                    <span className='go__color'><FcGoogle/></span> 
                                </a>
                                <a href="">
                                    <span className='li__color'><BsLinkedin/></span> 
                                </a>
                                <a href="">
                                    <span className='pi__color'><FaPinterestP/></span> 
                                </a>
                                
                            </span>
                             
                        </div>

                        <div className="coments__blog">
                            <div className="coments__blog-content p-3 ps-5">
                                <h3 className='pt-3'>
                                    <a className='h3_a' href="">Sport teams are great activity routine</a>
                                </h3>
                                <p className='pt-2 kursor1 kursor__border pb-5'>
                                    <span>July 17, 2017</span>
                                    <span className='ps-3 pe-3'><span><AiOutlineHeart/> 17</span>  </span>
                                    <span> <AiOutlineTag/> Education</span>
                                </p>
                                <div className="share__blog-icon d-flex justify-content-between pb-1  " >
                            <span className='content__span-share'><span className='share'>LECTURE / LIBRARY</span>  </span>
                            <span className='ikons__social'>
                                <a href="">
                                    <span className='fb__color'><FaFacebookF/></span> 
                                </a>
                                <a href="">
                                    <span className='tw__color'><BsTwitter/></span>
                                </a>
                                <a href="">
                                    <span className='go__color'><FcGoogle/></span> 
                                </a>
                                <a href="">
                                    <span className='li__color'><BsLinkedin/></span> 
                                </a>
                                <a href="">
                                    <span className='pi__color'><FaPinterestP/></span> 
                                </a>
                                
                            </span>
                             
                        </div>

                            </div>

                        </div>
                        
                        


                        
                        
                    </div>


                </div>




                <div className="col-12 col-md-3">
                    <div className="right__col3 ">
                        
                    <div className="Features ps-2 pt-3">
                            <div className="Features__title">
                                <h3 className='content__h3 pb-4 pt-3'>Popular Posts</h3>
                            </div>
                            <div className="Related-infos">
                                <div className="related__info">
                                    <div className="row">
                                        <div className="col-12 col-md-6 ">
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
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            <div className="Features__title pt-5">
                                <h3 className='content__h3 pb-4 pt-3'>Instagram</h3>
                                <div className="col-md-3">
                                      <a className='insta__logo' href="https://www.instagram.com/alphay09/">
                                      <span className=' '>
                                        
                                      <Lottie 
                        loop
                        animationData={insta}
                        play
                        style={{ width: 75, height: 75 }}
                    />
                                        </span>  
                                </a>
                                </div>
                              
                            </div>
                            <div className="Features__title pt-3">
                                <h3 className='content__h3 pb-4 pt-3'>Contact Us</h3>
                                <div className="col-md-3">
                                      <Link className='insta__logo ps-3' to="/contact">
                                       <span className='fs-1 ps-5'>
                                        
                                       <Lottie
                        loop
                        animationData={LotiiMessage}
                        play
                        style={{ width: 60, height: 60 }}
                    />
                                        </span> 
                                       <span>
                                        
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

export default Blog