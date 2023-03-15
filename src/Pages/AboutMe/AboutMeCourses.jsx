import React from 'react'
import '../../Companents/Courses/Courses.css'
import {AiOutlineTeam} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'


const Courses = ({Coursesbasligi,Coursessahib,CoursesImgsi,Coursesinfo}) => { 
  return (
    <>
    <div class="col-12 col-md-6   col-lg-3 ">
    <div class="card h-100 kart "  >
        <div className="kart-image"><img src={CoursesImgsi} class="card-img-top "/>
        </div>
      
      <div class="card-body">
        <h3><a href='' class="card-title">{Coursesbasligi}</a></h3>
        <p class="card-text">{Coursessahib}</p>
        <p class="card-text pb-3">{Coursesinfo} </p>
        
      </div>
      <div class="card-footer">
        <small class="text-muted d-flex">
            <span className='ikonstyl ps-2' ><AiOutlineTeam/></span> <span className='parastyle'>1</span>
            <span className='ikonstyl ps-4' ><BiTimeFive/></span> <span className='parastyle'> 2 hours</span>
        </small>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default Courses