import React from 'react'


import '../Faq/Faq.css'
import {Link} from 'react-router-dom'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Footer from '../../Companents/Footer/Footer'
import Navbar from '../../Companents/WhiteNavbar/WhiteNavbar';

const Faq = () => {

    const sectionRef = useRef(null);
    const colLeftRef = useRef(null);
  
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const timeline = gsap.timeline({ paused: true });
        timeline.fromTo(colLeftRef.current, { y: 0 }, { y: '100vh', duration: 1, ease: 'none' }, 0);

    ScrollTrigger.create({
      animation: timeline,
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom center',
      scrub: true
    });
  }, []);
  return (
    <>
    
   <Navbar/>
    <section  className="bgFaq para">
          <div className="container">
            <div className='d-flex justify-content-between titlefaq '>
              <h1 className='faqh1'>FAQ</h1>
              <span className='right-title text-dark'><Link className='linkfaq ' to="/">Home</Link> / FAQ</span>
            </div>
          </div>
    </section>

    <section ref={sectionRef} className="scrollSec">
      <div className="container">
        <div className="vertical__content">
          <div className="col col_left" ref={colLeftRef}>
            <h2 className="vertical__heading ">
              <span className=''><h1 className='faqh1 ps-4 padding-top '>FAQ</h1> </span>
            </h2>
            {/* <p className='ps-4'> Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper <br /> leo, eget euismod orci. Cum sociis natoque penatibus</p> */}
            <ul className='faq-ul'>
              <li className='faq-li'>
                <a href="#">Company Policies & Procedures</a>
              </li>
              <li className='faq-li'>
                <a href="#">Payment Options</a>
              </li>
              <li className='faq-li'>
                <a href="#">Terms & Conditions</a>
              </li>
              <li className='faq-li'>
                <a href="#">How do I Login</a>
              </li>
            </ul>

          </div>
          <div className="col col_right padding-top">
            <div className="vertical__item">
              <h4 className='faqh4'>1. Do you use new branding strategies for better costumers feedback?</h4>
              <p className='faq-p-media'>Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musbulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec .</p>
            </div>
            <div className="vertical__item">
              <h4 className='faqh4'>2. Is this marketplace adequate for new designers and their work?</h4>
              <p className='faq-p-media'>Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musbulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacini </p>
            </div>
            <div className="vertical__item">
              <h3 className='faqh4'>3. What are the best sources for better product placement?</h3>
              <p className='faq-p-media'>Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musbulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh. In hac habitasse platea dictumst. Proin nec blandit ligula. </p>
            </div>
            <div className="vertical__item">
              <h3 className='faqh4'>4. What is the best way to prospect in positioning new products?</h3>
              <p className='faq-p-media'>Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus musbulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacini</p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <Footer/>

    </>
  )
}

export default Faq