import React from 'react'
import '../CoursesList/CoursesList.css'


import Courses4Listt from '../../Courses4List.json'
import Courses4List from './CoursesListContainer'
//Companents
import Footer from '../../Companents/Footer/Footer'
import WhiteNavbar from '../../Companents/WhiteNavbar/WhiteNavbar'
import TopNavbar from '../../Companents/TopNavbar/TopNavbar'
//Router-DOM
import {Link} from 'react-router-dom'

//Icons
import {AiOutlineRight} from 'react-icons/ai'

const CoursesList = () => {
  return (
    <>
   <TopNavbar/>
   <WhiteNavbar/>
   
    <section  className="bgCoursesList para">
          <div className="container">
            <div className='d-flex justify-content-between titlecourseslist '>
              <h1 className='courseslisth1'>Courses List 4 Columns</h1>
              <span className='right-title'><Link className='' to="/">Home</Link> / <span className='right-title'>Courses List 4 </span> Columns</span>
            </div>
          </div>
    </section>     


    <section  className="full-height px-lg-5">
          <div className="container">
            <div className='d-flex'>
              {/* <Link to=""  className='text-primary'> <HiSquares2X2/></Link>
              <Link to className='text-primary ps-2 pe-2'> <AiOutlineUnorderedList/> </Link> */}
              <p className='ps-2'>Showing 1 – 8 of 23</p>
            </div>

            <div className="row gy-4 row-cols-1 row-cols-md-3 g-4">
                {Courses4Listt.map((birMelumat) => (
                  <Courses4List
                    Coursesbasligi={birMelumat.kurs_adi}
                    Coursessahib={birMelumat.kurs_sahibi}
                    CoursesImgsi={birMelumat.ImgUrl}
                    Coursesinfo={birMelumat.kurs_info}
                  />
                ))}
              </div>

            

            <div className='d-flex justify-content-end changepage pt-5  '>
              
              <Link to="/courses-list-4-columns"  className=''> <p >1</p></Link>
              <Link to=""  className=''> <p className='ps-3 pe-3'>2</p></Link>
              <Link to=""  className=''> <p>3</p></Link>
              <Link to="courses-list-4-columns/2"  className='text-primary ps-2'> <AiOutlineRight/></Link>
                    
            </div>
            </div>
    </section>     

    <Footer/> 

    

    
    
    </>
  )
}

export default CoursesList