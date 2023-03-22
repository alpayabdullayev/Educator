
import '../ContactUs/ContactUs.css'


//komponent
import TopNavbar from '../../Companents/TopNavbar/TopNavbar'
import WhiteNavbar from '../../Companents/WhiteNavbar/WhiteNavbar'

//Router-Dom
import {Link} from 'react-router-dom'

//ikon
import {GoLocation} from 'react-icons/go'
import {BsTelephoneForward} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import Footer from '../../Companents/Footer/Footer'

const ContactUs = () => {

    const form =  useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pn0txnm', 'template_0tzmt9e', form.current, 'I4QzzLgIy6brxHtMz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  
    };

  const clearForm = () => {
    form.current.reset();
  };


  return (
    <>
    <TopNavbar/>
    <WhiteNavbar/>

    <section className="bgFaq para">
        <div className="container">
          <div className='d-flex justify-content-between titlefaq '>
            <h1 className='faqh1'>Contact Us</h1>
            <span className='right-title text-dark'><Link className='linkfaq ' to="/">Home</Link> / Contact</span>
          </div>
        </div>
    </section>

    <section  className="full-height px-lg-5">
          <div className="container">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-6">
                    <h1 className='contactus__h1 pb-3'>
                        Contact Details
                    </h1>
                    <p className='contactus__p pb-2'>Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollic  itudin,<br /> quis bibendum auci elit consequatipsutis sem.</p>
                    <div className="new-york__ofis pt-3">
                        <h2 className='contactus__h2 pb-3'>New York Office</h2>
                        <div className="kart-info-adres d-flex">
                                     <span><BsTelephoneForward/> </span><span><p className='ps-3 pt-1 '>1-677-124-44227</p></span>
                        </div>

                        <div className="kart-info-adres d-flex">
                                     <span><CgMail/> </span><span><p className='ps-3 pt-1 '>ADDRESS: 244 Lisgar St Toronto</p></span>
                        </div>

                        <div className="kart-info-adres d-flex">
                                     <span><GoLocation/> </span><span><p className='ps-3 pt-1 '>ADDRESS: 244 Lisgar St Toronto</p></span>
                        </div>

                     </div>

                     <div className="hamburg__ofis pt-3">
                        <h2 className='contactus__h2 pb-3'>Hamburg Office</h2>
                        <div className="kart-info-adres d-flex">
                                     <span><BsTelephoneForward/> </span><span><p className='ps-3 pt-1 '>1-677-124-44227</p></span>
                        </div>

                        <div className="kart-info-adres d-flex">
                                     <span><CgMail/> </span><span><p className='ps-3 pt-1 '>ADDRESS: 244 Lisgar St Toronto</p></span>
                        </div>

                        <div className="kart-info-adres d-flex">
                                     <span><GoLocation/> </span><span><p className='ps-3 pt-1 '>ADDRESS: 244 Lisgar St Toronto</p></span>
                        </div>
                     </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 pt-2">
                    <div className="pt-5 contactus__form">
                        <h3 className='pb-4'>Feel free to write us</h3>
                        <form action="" className="row g-lg-3 gy-3" ref={form} onSubmit={sendEmail}>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Enter your name" name='sexsin_adi' />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" placeholder="Enter your email"  name='sexsin_emaili'/>
                                </div>
                                <div className="form-group col-12">
                                    <input type="text" className="form-control" placeholder="Enter Website"  name='sexsin_subjecti'/>
                                </div>
                                <div className="form-group col-12">
                                    <textarea name="message" rows="4" className="form-control" placeholder="Enter your message" ></textarea>
                                </div>
                                <div className="form-group col-12 d-grid">
                                    <button onClick={clearForm} type="submit" className="Button">Contact me</button>
                                </div>
                            </form>
                    </div>
                        
                </div>
            </div>
          </div>
    </section>  



    <div className="contact__map ">  
         <iframe width="100%" height="514" id="gmap_canvas" src="https://maps.google.com/maps?q=yeni%20gunesli&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>

 
    
    
    <Footer/>
    
    </>
  )
}

export default ContactUs