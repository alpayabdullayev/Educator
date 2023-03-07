import React, {useEffect,useState} from 'react'
import '../SecondNavbar/SecondNavbar.css'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import {AiOutlineBars} from 'react-icons/ai'
import LIGHT from '../../img/SecondNavbar/logo-light.png'
import DARK from '../../img/SecondNavbar/logo-dark.png'




const SecondaNavbar = () => {

  const [color,setColor] = useState(false);
  const [isDark, setIsDark] = useState(true); // varsayılan durum karanlık mod

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 80) {
        setIsDark(false);
      } else {
        setIsDark(true);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);








  const changeColor = ()=> {
      if (window.scrollY >= 90){
        setColor(true)
      } else {
          setColor(false)
      }

  }

   window.addEventListener('scroll', changeColor)

  return (
    <>
        <nav class={ color ? 'navbar active navbar-expand-lg  sticky-top navbardi' : 'navbar navbar-expand-lg  sticky-top navbardi ' }>
          <div class="container-fluid">
                <a class={isDark ? 'active-display' : ''} href="#">
                   {isDark ? <img src={LIGHT} className='light-image' alt="Dark mode" /> : <img src={DARK} className='dark-image' alt="Light mode" />}
              </a>  
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                      <li class="nav-item nav-items">
                          <a class="nav-link asecond" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item nav-items">
                          <a class="nav-link asecond" aria-current="page" href="#">Courses</a>
                      </li>
                      <li class="nav-item nav-items">
                          <a class="nav-link asecond" aria-current="page" href="#">Events</a>
                      </li>
                      <li class="nav-item nav-items">
                          <a class="nav-link asecond" aria-current="page" href="#">Pages</a>
                      </li>
                      <li class="nav-item nav-items">
                          <a class="nav-link asecond" aria-current="page" href="#">Shop</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link asecond" aria-current="page" href="#">Blog</a>
                      </li>
                      <li class="nav-item nav-items">
                          <a class="nav-link asecond" aria-current="page" href="#">Elements</a>
                      </li>
                      <li class="nav-item nav-items">
                          <a class="nav-link asecond" aria-current="page" href="#">
                              <span className='asecond'><HiMagnifyingGlass/></span>
                          </a>
                      </li>
                      <li class="nav-item nav-items">
                          <a class="nav-link asecond" aria-current="page" href="#">
                              <span className='asecond'><AiOutlineBars/></span>
                          </a>
                      </li>

                  </ul>
              </div>
          </div>
      </nav>



      
    </>
  )
}

export default SecondaNavbar