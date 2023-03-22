import React from 'react'
import '../OurTeacher/ourteacher.css'
import OurTeacherCard from './OurTeacherCard'


import TopNavbar from '../../Companents/TopNavbar/TopNavbar'
import WhiteNavbar from '../../Companents/WhiteNavbar/WhiteNavbar'

//Router-dom
import {Link} from 'react-router-dom'

import OurTeacherInfo from '../../OurTeacherInfo.json'
import Footer from '../../Companents/Footer/Footer'

const OurTeacher = () => {
  return (
    <>
    
    <TopNavbar />
    <WhiteNavbar />


    <section className="bgFaq para">
        <div className="container">
          <div className='d-flex justify-content-between titlefaq '>
            <h1 className='faqh1'>Our Teacher</h1>
            <span className='right-title text-dark'><Link className='linkfaq ' to="/">Home</Link> / Our Teacher</span>
          </div>
        </div>
    </section>

    <section className="full-height px-lg-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                <div className="kart pt-3">
                      <div className="kart-image">
                        <img src='https://educator.qodeinteractive.com/wp-content/uploads/2017/07/teachers-1.jpg' alt="" />
                            <div class="layer">
                                <h3 className='joseph__h3' >Rəşaaaad</h3>
                            </div>
                      </div>
                    </div>  
                </div>

                <div className="col-12 col-md-6 ps-3">
                    <h1 className='teacher__h1 pt-2'>Joseph White</h1>
                    <p className='teacher__top-p pt-4 '>Exerci deserunt ei qui, nec ceteros quaerendum et, appareat abhorreant no. Mel minim novum invenire no</p>
                    <p className='teacher__bottom-p pt-4'>Ad est fugit senserit contentiones. Sumo apeirian his at, ei nam mucius possim accusam. Duo minim dicit contentiones cu, dolor soluta ne nec, id nisl augue eos. Ad corpora partiendo sea, id ipsum omnium disputationi pri, eum eu ipsum placerat. Mel et gloriatur temporibus</p>
                    <img className='imza pt-4 ' src="https://educator.qodeinteractive.com/wp-content/uploads/2017/07/signature-1.png" alt="" />
                </div>
            </div>

            <div className="row padding__teacher">
                

            {OurTeacherInfo.map((birMelumat) => (
                  <OurTeacherCard
                  
                    muellimadi={birMelumat.teacher_name}
                    muellimImgsi={birMelumat.ImgUrl}
                    muelliminfo={birMelumat.teacher_work}
                  />
                ))}



            </div>


        </div>
    </section>



    <Footer/>
    
    
    
    </>
  )
}

export default OurTeacher