import React from "react";
import "../Parallaxdi/Parallax.css";
import { useState, useEffect } from 'react';

//Icons
import {FcGraduationCap} from 'react-icons/fc'
import {SlGraduation} from 'react-icons/sl'
import {TbCertificate} from 'react-icons/tb'
import {IoCalendarOutline} from 'react-icons/io5'
import {HiOutlineComputerDesktop} from 'react-icons/hi2'

//Count up
import CountUp from 'react-countup';





const Parallaxdi = () => {





  return (
    <>
      <div className="image para">
        <div className="parallax-content pt-4">
          <div className="row pt-2">
            <div className="col-6 col-md-3 ">
              <span className="iconss"><SlGraduation/></span> <br />
              <CountUp className='count__up' delay={3} end={13286} duration={5}/>
              <h3 className="h3stylee">Success Stories</h3>
            </div>
            <div className="col-6 col-md-3">
              <span className="iconss"><TbCertificate/></span> <br />
              <CountUp className='count__up' delay={3} end={678} duration={5}/>
              <h3 className="h3stylee">Trusted Tutors</h3>
            </div>
            <div className="col-6 col-md-3">
              <span className="iconss"><IoCalendarOutline/></span> <br />
              <CountUp className='count__up' delay={3} end={347} duration={5}/>
              <h3 className="h3stylee">Scheduled Events</h3>
            </div>
            <div className="col-6 col-md-3">
              <span className="iconss"><HiOutlineComputerDesktop/></span> <br />
              <CountUp className='count__up' delay={3} end={1912} duration={5}/>
              <h3 className="h3stylee">Available Courses</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallaxdi;
