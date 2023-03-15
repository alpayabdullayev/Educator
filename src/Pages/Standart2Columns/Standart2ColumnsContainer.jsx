import React from 'react'
import '../Standart2Columns/Standart2Columns.css'
import Standart2Columns from './Standart2Columns'

//Components
import TopNavbar from '../../Companents/TopNavbar/TopNavbar'
import WhiteNavbar from '../../Companents/WhiteNavbar/WhiteNavbar'

//Router-Dom
import {Link} from 'react-router-dom'

//json
import Standart2ColumnsInfo from '../../Standart2ColumnsInfo.json'
import Footer from '../../Companents/Footer/Footer'


const Standart2ColumnsContainer = () => {
  return (
    <>
    {/* Components */}
    <TopNavbar/>
    <WhiteNavbar/>


    <section  className="bgFaq para">
          <div className="container">
            <div className='d-flex justify-content-between titlefaq '>
              <h1 className='faqh1'>Standard Two Columns</h1>
              <span className='right-title text-dark'><Link className='linkfaq ' to="/">Home</Link> / Standard Two Columns</span>
            </div>
          </div>
    </section>

    <section  className="full-height px-lg-5">
        <div className="container">
            <div className="row">
            {Standart2ColumnsInfo.map((birMelumat) => (
                  <Standart2Columns
                  
                    Standartbasligi={birMelumat.standart_adi}
                    StandartImgsi={birMelumat.ImgUrl}
                    Standartinfo={birMelumat.standart_info}
                  />
                ))}
                
            </div>
        </div>
    </section>    

    <Footer/>



    
    </>
  )
}

export default Standart2ColumnsContainer