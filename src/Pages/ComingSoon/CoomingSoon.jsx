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
            <section className='page'>
                <div className="page-content">
                    <img src={Logo} alt="logo" className='page-logo' />
                    <h1 className='page-text'>Educator coming soon!</h1>
                    <CountdownTimer />
                    <Form />
                </div>
            </section>
        </>
    )
}

export default CoomingSoon