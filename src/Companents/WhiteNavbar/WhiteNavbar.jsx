import { React, useEffect } from 'react'
import '../WhiteNavbar/whitenavbar.css'
// Images
import Image2 from '../../img/SecondNavbar/logo-dark.png'
// Icons
import { AiOutlineSearch } from 'react-icons/ai'

//router-dom
import {Link} from 'react-router-dom'

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

    return (
        <>
             <nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top white-navbar'>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={Image2} alt="Dark Logo" className="dark-image" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Home
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link" aria-current="page" to="courses-list-4-columns">Courses</Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="courses-list-4-columns">Courses  List 4 Columns</Link></li>
                                    <li><Link class="dropdown-item" to="courses-list-4-columns/courses-list-4-columns/2">Course Simple Single</Link></li>

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
                                <Link class="nav-link" aria-current="page" to="/">Blog</Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="standartlist">Standard List</Link></li>
                                    <li><Link class="dropdown-item" to="/">Standard Post</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Contact</Link>
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