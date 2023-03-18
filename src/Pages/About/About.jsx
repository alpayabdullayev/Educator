import React from 'react'
import '../About/About.css'
import {Link} from 'react-router-dom'


import TopNavbar from '../../Companents/TopNavbar/TopNavbar'
import WhiteNavbar from '../../Companents/WhiteNavbar/WhiteNavbar'

import {SiVerizon} from 'react-icons/si'
import Footer from '../../Companents/Footer/Footer'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const About = () => {
  return (
    <>
    
    <TopNavbar/>
    <WhiteNavbar/>

   
    <section  className="bgabout para">
          <div className="container">
            <div className='d-flex justify-content-between titlecourseslist '>
              <h1 className='courseslisth1'>About</h1>
              <span className='right-title'><Link className='' to="/">Home</Link> / <span className='right-title'>About</span> </span>
            </div>
          </div>
    </section>   

    <section  className="full-height px-lg-5 ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="Joseph">
                <h2 className='joseph__h2'>
                  Joseph White
                </h2>
                <p className='joseph__p'>Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit dicat mollis</p>

                <h3 className="joseph__h3 pt-4 ">
                  Education
                </h3>
                <p className="joseph--p">
                Congue mollis felis tortor id. Sed aliquet amet sit vitae commodo commodo ultricies lectus. A nullam consequat sociis lectus erat. Suscipit ridiculus quis ante cras mauris faucibus nunc vel vel et sed. Sodales nulla ut. Placerat sem sed. Sed et sed turpis amet nisl eros risus a eu cras fringilla. Ac porta adipiscing. Eros sit mauris. Odio sed
                </p>

                <p className='tap-aboutme-p pt-4'> <span className='verizon'><SiVerizon/></span> <span>We Enrich Lives Through Learning.</span> </p>
                <p className='tap-aboutme-p'> <span className='verizon'><SiVerizon/></span> <span>Guiding the young generation to success.</span> </p>
                <p className='tap-aboutme-p'> <span className='verizon'><SiVerizon/></span> <span>Learn to Play, Converse with Confidence</span> </p>


                <h3 className="joseph__h3 pt-4 ">
                Experience
                </h3>

                <p className="joseph--p">
                Congue mollis felis tortor id. Sed aliquet amet sit vitae commodo commodo ultricies lectus. A nullam consequat sociis lectus erat. Suscipit ridiculus quis ante cras mauris faucibus nunc vel vel et sed. Sodales nulla ut. Placerat sem sed. Sed et sed turpis amet nisl eros risus a eu cras fringilla. Ac porta adipiscing. Eros sit mauris. Odio sed
                </p>

                <h3 className="joseph__h3 pt-4 ">
                  Skills
                </h3>
                
                <p className="joseph--p">
                Congue mollis felis tortor id. Sed aliquet amet sit vitae commodo commodo ultricies lectus. A nullam consequat sociis lectus erat. Suscipit ridiculus quis ante cras mauris faucibus nunc vel vel et sed. Sodales nulla ut. Placerat sem sed. Sed et sed.
                </p>


              </div>



            </div>






            <div className="col-12 col-md-5 ">
              <div className="kart pt-1  ps-3 ">
                <div className="kart-image ">
                  <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1679170247/about-teacher_wg72nx.jpg" alt="" />
                  <div class="layer">
                    <h3 className='joseph__h3' >Joseph White</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>  

    <OwlCarousel  loop  margin={0}  >
      <div class='item'>
              <div className="kart    ">
                <div className="kart-image ">
                          <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1679172150/about-teacher-gallery-1_omtycf.jpg" alt="" />
                </div>
              </div>

  
      </div>
      <div class='item'>
      <div className="kart    ">
                <div className="kart-image ">
                          <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1679172257/about-teacher-gallery-4_qv3qps.jpg" alt="" />
                </div>
              </div>
             
      </div>
      <div class='item'>

              <div className="kart    ">
                <div className="kart-image ">
                          <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1677861182/itbrains_instagram_post_shekil_wndmuy.jpg" alt="" />
                </div>
              </div>


      </div>
      <div class='item'>

              <div className="kart    ">
                <div className="kart-image ">
                  <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1678553070/event-13_qaaxii.jpg" alt="" />
                </div>
              </div>

        
      </div>

      <div class='item'>

              <div className="kart    ">
                <div className="kart-image ">
                          <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1677861088/course-img-2_unuldj.jpg" alt="" />
                </div>
              </div>

      </div>
      <div class='item'>

              <div className="kart    ">
                <div className="kart-image ">
                          <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1677861182/itbrains_instagram_post_shekil_wndmuy.jpg" alt="" />
                </div>
              </div>

      </div>
      <div class='item'>
              <div className="kart    ">
                <div className="kart-image ">
                          <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1679172259/about-teacher-gallery-5_v71ucc.jpg" alt="" />
                </div>
              </div>

      </div>

      <div class='item'>
              <div className="kart    ">
                <div className="kart-image ">
                          <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1679172254/about-teacher-gallery-2_yelnk7.jpg" alt="" />
                </div>
              </div>

      </div>
      <div class='item'>
      <div className="kart    ">
                <div className="kart-image ">
                  <img src="https://res.cloudinary.com/ds7i6phph/image/upload/v1679170247/about-teacher_wg72nx.jpg" alt="" />
                </div>
              </div>

      </div>

      
    </OwlCarousel>
    


    <Footer/>




    </>


  )
}

export default About