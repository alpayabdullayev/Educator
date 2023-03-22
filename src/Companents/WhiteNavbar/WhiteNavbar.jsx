import { React, useEffect, useRef } from 'react'
import '../WhiteNavbar/whitenavbar.css'
import SearchButton from '../SearchButton/SearchButton'
// Images
import Image2 from '../Navbar/logo-dark.png'
import { Link } from 'react-router-dom'
// Icons
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineBars } from 'react-icons/ai'
import { GiCrossedPistols } from 'react-icons/gi'


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


        if (kliklenenElement.classList.contains('bars-icon')) {
            qaraDivUnvaniRef.current.classList.add('aktiv')
        }
    }

    const qaraMenyunuBagla = (e) => {
        const kliklenenElement = e.target


        if (kliklenenElement.classList.contains('cross-icon')) {
            qaraDivUnvaniRef.current.classList.remove('aktiv')
        }
    }
        ;

    return (
        <>
            <div className='overlay  ' ref={qaraDivUnvaniRef} onClick={qaraMenyunuBagla}>
                <GiCrossedPistols className='cross-icon' />

                <div className='nav-links nav-link fw-bold text-white overlay__nav ' id='overlay-nav'>
                <ul class="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link class="nav-link  white-link" aria-current="page" to="/">Home
                                </Link>
                            </li>
                            <li className="nav-item my-dropdown">
                                <Link class="nav-link  white-link" aria-current="page" to=".">Courses</Link>
                                <ul className="menu">
                                    <li className='nav-item'>
                                        <a href="#" className='nav-link underline-hover'>Courses List</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href="#" className='nav-link underline-hover'>Courses Single</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item my-dropdown">
                                <Link class="nav-link  white-link" aria-current="page" to="/">Events</Link>
                                <ul className="menu">
                                    <li className='nav-item'>
                                        <a href="#" className='nav-link underline-hover'>Events List</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href="#" className='nav-link underline-hover'>Events Single</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item my-dropdown ">
                                <Link class="nav-link  white-link" aria-current="page" to="/">Pages</Link>
                                <ul className="menu">
                                    <li className='nav-item'>
                                        <a href="#" className='nav-link underline-hover'>Our teachers</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href="#" className='nav-link underline-hover'>About</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href="#" className='nav-link underline-hover'>About Me</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href="#" className='nav-link underline-hover'>FAQ</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href="#" className='nav-link underline-hover'>Gallery</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item my-dropdown">
                                <Link className="nav-link  white-link" aria-current="page" to="/blog">Blog</Link>
                                <ul className="menu">
                                    <li className='nav-item'>
                                        <Link to="/blog" className='nav-link underline-hover'>Standart List</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/blog" className='nav-link underline-hover'>Masonry List</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link  white-link" aria-current="page" to="contact">Contact</Link>
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
                        <AiOutlineBars className='bars-icon' />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link class="nav-link  white-link" aria-current="page" to="/">Home
                                </Link>
                            </li>
                            <li className="nav-item my-dropdown">
                                <Link class="nav-link  white-link" aria-current="page" to="/courses-list-4-columns">Courses</Link>
                                <ul className="menu">
                                    <li className='nav-item'>
                                        <Link to="/courses-list-4-columns/courses-list-4-columns/2" className='nav-link underline-hover'>Courses List</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/coursesingle" className='nav-link underline-hover'>Courses Single</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item my-dropdown">
                                <Link class="nav-link  white-link" aria-current="page" to="/eventslist">Events</Link>
                                <ul className="menu">
                                    <li className='nav-item'>
                                        <Link to="/eventslist" className='nav-link underline-hover'>Events List</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/eventsingle" className='nav-link underline-hover'>Events Single</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item my-dropdown ">
                                <Link class="nav-link  white-link" aria-current="page" to="/">Pages</Link>
                                <ul className="menu">
                                    <li className='nav-item'>
                                        <Link to="/ourteacher" className='nav-link underline-hover'>Our teachers</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/about" className='nav-link underline-hover'>About</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/aboutme" className='nav-link underline-hover'>About Me</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/faq" className='nav-link underline-hover'>FAQ</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/standart2columns" className='nav-link underline-hover'>Gallery</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item my-dropdown">
                                <Link className="nav-link  white-link" aria-current="page" to="/">Blog</Link>
                                <ul className="menu">
                                    <li className='nav-item'>
                                        <a href="#" className='nav-link underline-hover'>Standart List</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href="#" className='nav-link underline-hover'>Masonry List</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link  white-link" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item nav-search-item">
                               
                                    <SearchButton/>
                                
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar