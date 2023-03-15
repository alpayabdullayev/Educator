import { React, useEffect } from 'react'
import './navbar.css'
import Image1 from '../Navbar/logo-light.png'
import {Link} from 'react-router-dom'
import Image2 from '../Navbar/logo-dark.png'
// Icons
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import LIGHT from '../../img/SecondNavbar/logo-light.png'
import DARK from '../../img/SecondNavbar/logo-dark.png'


const Navbar = () => {
    useEffect(() => {
        const imgLight = document.querySelector('.light-image');
        const imgDark = document.querySelector('.dark-image');
        const navbar = document.querySelector('.navbar');

        const handleScroll = () => {
            let gap = 50;
            if (window.pageYOffset > gap) {
                navbar.classList.add('active-class');
            } else {
                navbar.classList.remove('active-class');
            }

            if (window.pageYOffset > gap) {
                imgDark.classList.remove('active-display');
                imgLight.classList.add('active-display');
            } else {
                imgDark.classList.add('active-display');
                imgLight.classList.remove('active-display');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="top-navbar">
                <ul className="left-side">
                    <li className="left-side-items">
                        <a href=".">Student Home</a>
                    </li>
                    <li className="left-side-items">
                        <a href=".">Call +44 300 303 0266</a>
                    </li>
                    <li className="left-side-items">
                        <a href=".">Follow Us</a>
                    </li>
                    <li className="left-side-items">
                        <a href="."><AiFillLinkedin className='social-icon' /></a>
                    </li>
                    <li className="left-side-items">
                        <a href="."><AiOutlineInstagram className='social-icon' /></a>
                    </li>
                    <li className="left-side-items">
                        <a href="."><AiFillTwitterSquare className='social-icon' /></a>
                    </li>
                    <li className="left-side-items">
                        <a href="."><AiFillFacebook className='social-icon' /></a>
                    </li>

                </ul>
                <ul className="right-side ">
                    <li className="right-side-items dropdown">
                        <a href=".">English</a>
                    </li>
                    <li className="right-side-items">
                        <a href=".">Login</a>
                    </li>
                    <li className="right-side-items">
                        <a href=".">Register</a>
                    </li>
                </ul>
            </div>
            <nav className='navbar navbar-expand-lg bg-body-tertiary sticky-top'>
                <div className="container-fluid medianav">
                    <a href="." class="navbar-brand">
                        <img src={LIGHT} alt="Light Logo" className="light-image" />
                        <img src={DARK} alt="Dark Logo" class="dark-image active-display" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href=".">Home
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" aria-current="page" href=".">Courses</a>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="courses-list-4-columns">Courses  List 4 Columns</Link></li>
                                    <li><a class="dropdown-item" href="/">Course Single</a></li>
                                    <li><a class="dropdown-item" href="/">Course Simple Single</a></li>
                                    <li><a class="dropdown-item" href="/">User Dashboard</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" aria-current="page" href=".">Events</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">Events List</a></li>
                                    <li><a class="dropdown-item" href="/">Event Single</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link  dropdown-toggle" aria-current="page" href=".">Pages</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">Our Teachers</a></li>
                                    <li><a class="dropdown-item" href="/">About</a></li>
                                    <li><a class="dropdown-item" href="/">About Me</a></li>
                                    <li><a class="dropdown-item" href="/">Contact Us</a></li>
                                    <li><a class="dropdown-item" href="faq">FAQ Page</a></li>
                                    <li><a class="dropdown-item" href="faq">Galery</a></li>
                                    <li className='dropdown'><a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="/">Forum</a>
                                        <ul class="dropdown-menu forum-dropwdown">
                                            <li><a class="dropdown-item" href="/">Events List</a></li>
                                            <li><a class="dropdown-item" href="/">Event Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="dropdown-item" href="/">404 Page</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href=".">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href=".">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href=".">Elements</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href=".">

                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href=".">
                                    <i class="fa-solid fa-bars"></i>
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