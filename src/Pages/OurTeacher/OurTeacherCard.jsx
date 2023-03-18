import React from 'react'
import Tilt from 'react-parallax-tilt'
import '../OurTeacher/ourteacher.css'

const OurTeacherCard = ({muellimadi,muellimImgsi,muelliminfo}) => {
  return (
    <>
    <div className="col-12 col-md-6 col-lg-3">
        <Tilt>
            <img src={muellimImgsi} alt="" />
        </Tilt>
        <h3 className='ourteacher__h3'>
            {muellimadi}
        </h3>
        <p className='ourteacher__p'>{muelliminfo}</p>
    </div>



    
    
    </>
  )
}

export default OurTeacherCard