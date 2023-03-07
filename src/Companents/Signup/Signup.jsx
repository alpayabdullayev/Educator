import React from 'react'
import '../Signup/Signup.css'
import IMG1 from '../../img/Signup/h3-icon-1.png'
import IMG2 from '../../img/Signup/h3-icon-2.png'
import IMG3 from '../../img/Signup/h3-icon-3.png'
import IMG4 from '../../img/Signup/h3-icon-4.png'

const Signup = () => {
  return (
    <>
        <section  className="full-height px-lg-5 signup">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="ikili2 d-flex">
                            <div className="col-12 col-md-6">
                                <div className='d-flex col-12 col-md-6'> 
                                    <img className='signimg1' src={IMG2} alt="" />
                                    <h3 className='h3sign'>E-Learning</h3>
                                </div>
                                <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                            </div>
                            <div className="col-12 col-md-6 iki2">
                            <div className='d-flex'> 
                                    <img className='signimg1' src={IMG1} alt="" />
                                    <h3 className='h3sign'>Tuition</h3>
                                </div>
                                <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. alpay</p>
                            </div>
                            
                        </div>
                        
                        <div className='ikili2 d-flex col-12'>
                        <div className="col-12 col-md-6">
                        <div className='d-flex'> 
                                <img className='signimg1' src={IMG3} alt="" />
                                <h3 className='h3sign' >Technology</h3>
                            </div>
                            <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="col-12 col-md-6 iki2">
                            <div className='d-flex'> 
                                <img className='signimg1' src={IMG4} alt="" />
                                <h3 className='h3sign'>Alumni</h3>
                            </div>
                            <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua alpay.</p>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-4">
                    
                    </div>
                </div>

            </div>
        </section>    
    
    </>
  )
}

export default Signup
