import React from 'react'
//Logo
import Logo from '../../img/Header/h3-slider-image.png'
import Form from '../../Companents/Form/Form';
// Import clock
import '../../Pages/ComingSoon/ComingSoon.css'
import CountdownTimer from '../../Companents/ComingSoon/CountdownTimer'
const CoomingSoon = () => {


    return (
        <>
          
          <section  className="page full-height">
            <div className="container ">
                
                <div className='page-content full-height flex-column  '>
                    <img src={Logo} alt="logo" className='page-logo' />
                    <h1 className='page-text text-center'>Educator coming soon!</h1>
                    <CountdownTimer  />
                    <Form className='form__media '/>
                    
                </div>
            </div>
    </section>  
                
            

        </>
    )
}

export default CoomingSoon