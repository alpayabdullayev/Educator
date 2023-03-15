import React from 'react'
import '../NotFound/NotFound.css'
import Button from '../../Companents/Button/Button'
import Navbar from '../../Companents/WhiteNavbar/WhiteNavbar'



const NotFound = () => {
  return (
    <>
        <Navbar/>
        <section  className="full-height px-lg-5 bgNotfound">
          <div className="container">
            <div className="notfoundcontent">
              <h1 className='content-h1'>404</h1>
              <h3 className='content-h3 pt-2 pb-2'>Page not found</h3>
              <p className='content-p pt-2 pb-3'>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
              <Button butonunIcindekiYazi=''   classAdi='Button' ButtonunLinki='http://localhost:3000/'/>
            </div>
                    
          </div>
        </section>  


    </>
  )
}

export default NotFound