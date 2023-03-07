import React from "react";
import "../Parallaxdi/Parallax.css";
import { useState, useEffect } from 'react';


import {FcGraduationCap} from 'react-icons/fc'
import {SlGraduation} from 'react-icons/sl'
import {TbCertificate} from 'react-icons/tb'
import {IoCalendarOutline} from 'react-icons/io5'
import {HiOutlineComputerDesktop} from 'react-icons/hi2'





const Parallaxdi = () => {





  return (
    <>
      <div className="image para">
        <div className="parallax-content pt-4">
          <div className="row pt-2">
            <div className="col-6 col-md-3 ">
              <span className="iconss"><SlGraduation/></span>
              <h1 className="h1stylee"> 13286</h1>
              <h3 className="h3stylee">Success Stories</h3>
            </div>
            <div className="col-6 col-md-3">
              <span className="iconss"><TbCertificate/></span>
              <h1 className="h1stylee">678</h1>
              <h3 className="h3stylee">Trusted Tutors</h3>
            </div>
            <div className="col-6 col-md-3">
              <span className="iconss"><IoCalendarOutline/></span>
              <h1 className="h1stylee">347</h1>
              <h3 className="h3stylee">Scheduled Events</h3>
            </div>
            <div className="col-6 col-md-3">
              <span className="iconss"><HiOutlineComputerDesktop/></span>
              <h1 className="h1stylee">1912</h1>
              <h3 className="h3stylee">Available Courses</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallaxdi;
