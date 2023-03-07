import React, { useState } from "react";
import "../FourMan/FourMan.css";
import {FcGraduationCap} from 'react-icons/fc'
import {SlGraduation} from 'react-icons/sl'
import {CiSaveDown1} from 'react-icons/ci'
import {AiOutlineTeam} from 'react-icons/ai'

const FourMan = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="full-height px-lg-5 fourman ">
      <div className="container pb-5  tab-container ">
        <div className="bloc-tabs row pb-4 " data-aos="fade-right" data-aos-delay="100" >
          <div className={toggleState === 1 ? "tabs active-tabs col-12 col-md-2" : "tabs col-12 col-md-2"} onClick={() => toggleTab(1)}>
           < SlGraduation />  Description
          </div>
          <div className={toggleState === 2 ? "tabs active-tabs col-12 col-md-2" : "tabs col-12 col-md-2"} onClick={() => toggleTab(2)}> 
            <CiSaveDown1/> Syllabus
          </div>
          <div className={toggleState === 3 ? "tabs active-tabs col-12 col-md-2" : "tabs col-12 col-md-2"} onClick={() => toggleTab(3)}>
            <AiOutlineTeam/> Teachers
          </div>
        </div>

        <div className="content-tabs" data-aos="fade-right" data-aos-delay="300">
          <div className={toggleState === 1 ? "content active-content" : "content"}>
            <p className="" data-aos="fade-down">
              Description Syllabus Teachers Mauris et diam pellentesque ex
              fermentum consectetur. Curabitur non tortor sit amet ligula
              viverra commodo. Quisque luctus nunc dolor, nec porttitor diam
              accumsan et. Duis convallis ipsum eget ligula scelerisque, eget
              consectetur mi interdum. Nullam tempor arcu consectetur
              pellentesque ultrices. Phasellus eu ipsum felis
            </p>
          </div>

          <div className={toggleState === 2 ? "content active-content" : "content"}>
            <p data-aos="fade-down">
              Description Syllabus Teachers Lorem Ipsn gravida nibh vel velit
              auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit
              consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh
              vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
              mauris vitae erat consequat auctor eu in elit.
            </p>
          </div>

          <div className={toggleState === 3 ? "content active-content" : "content"}>
            <p data-aos="fade-down">
              Description Syllabus Teachers Lorem Ipsn gravida nibh vel velit
              auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit
              consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh
              vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
              mauris vitae erat consequat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourMan;
