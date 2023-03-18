import { React, useEffect, useRef } from 'react'
import '../WhiteNavbar/whitenavbar.css'
// Images
import Image2 from '../Navbar/logo-dark.png'
import { Link } from 'react-router-dom'
// Icons
import { AiOutlineSearch } from 'react-icons/ai'
import {AiOutlineBars} from 'react-icons/ai'
import {GiCrossedPistols} from 'react-icons/gi'

const Navbar = () => {
    useEffect(() => {

        const navbar = document.querySelector('.navbar');

        const handleScroll = () => {
            let gap = 50;
            if (window.pageYOffset > gap) {
                navbar.classList.add('active-class');
            } else {
                navbar.classList.remove('active-class');
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const qaraDivUnvaniRef = useRef()
    const qaraMenyunuAc = (e) => {
    const kliklenenElement = e.target


  if(kliklenenElement.classList.contains('bars-icon')){
    qaraDivUnvaniRef.current.classList.add('aktiv')
  }
}

const qaraMenyunuBagla = (e) => {
  const kliklenenElement = e.target


  if(kliklenenElement.classList.contains('cross-icon')){
    qaraDivUnvaniRef.current.classList.remove('aktiv')
  }
}

    return (
        <>




    <div className='overlay  ' ref={qaraDivUnvaniRef } onClick={qaraMenyunuBagla}>
      <GiCrossedPistols className='cross-icon'   />

      <div className='nav-links nav-link fw-bold text-white overlay__nav'>
      <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Home
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link" aria-current="page" to=".">Courses</Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="courses-list-4-columns">Courses  List 4 Columns</Link></li>
                                    <li><Link class="dropdown-item" to="courses-simple-single">Course Simple Single</Link></li>

                                    <li><Link class="dropdown-item" to="userdashboard">User Dashboard</Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link" aria-current="page" to="eventslist">Events</Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="eventslist">Events List</Link></li>
                                    <li><Link class="dropdown-item" to="eventsingle">Event Single</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link" aria-current="page" to="/">Pages</Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/">Our Teachers</Link></li>
                                    <li><Link class="dropdown-item" to="aboutme">About Me</Link></li>
                                    <li><Link class="dropdown-item" to="faq">FAQ Page</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link" aria-current="page" to="contact">Blog</Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="">Standard List</Link></li>
                                    <li><Link class="dropdown-item" to="">Standard Post</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="contact">Contact</Link>
                            </li>

                        </ul>
        
        
        
        
      </div>


    </div>


            <nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top white-navbar'>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={Image2} alt="Dark Logo" className="dark-image" />
                    </Link>
                    <button onClick={qaraMenyunuAc} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <AiOutlineBars className='bars-icon'/>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Home
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link" aria-current="page" to=".">Courses</Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="courses-list-4-columns">Courses  List 4 Columns</Link></li>
                                    <li><Link class="dropdown-item" to="courses-simple-single">Course Simple Single</Link></li>

                                    <li><Link class="dropdown-item" to="userdashboard">User Dashboard</Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link" aria-current="page" to="/">Events</Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="events-list">Events List</Link></li>
                                    <li><Link class="dropdown-item" to="event-single">Event Single</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link" aria-current="page" to="/">Pages</Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/">Our Teachers</Link></li>
                                    <li><Link class="dropdown-item" to="/aboutme">About Me</Link></li>
                                    <li><Link class="dropdown-item" to="faq">FAQ Page</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link" aria-current="page" to="/">Blog</Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/">Standard List</Link></li>
                                    <li><Link class="dropdown-item" to="/">Standard Post</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <a className='search' href="#">
                                    <AiOutlineSearch />
                                </a>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar