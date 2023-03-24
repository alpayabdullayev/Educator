import React, { useState } from 'react'
import '../MobileNav/MobileNav.css'
import {Link} from 'react-router-dom'
import { RxCross1 } from 'react-icons/rx'
const MobileNav = () => {
    const [activeMenuIndex, setActiveMenuIndex] = useState(-1);

    const toggleMenu = (index) => {
        if (activeMenuIndex === index) {
            setActiveMenuIndex(-1);
        } else {
            setActiveMenuIndex(index);
        }
    };

    const handleCrossClick = () => {
        const mobileNavLinks = document.querySelector(".mobile-nav-links");
        mobileNavLinks.classList.add("d-none");


    };


    
    return (
        <>
            <div className="mobile-nav-links position-fixed">
                <RxCross1 className='cross-icon' onClick={handleCrossClick} />
                <ul className='mobile-nav-items'>
                    <li className='mobile-nav-item'><Link to="/">HOME</Link></li>
                    <li className="mobile-nav-item my-dropdown-mobile"
                        onClick={() => toggleMenu(0)}><Link className='mobile-link' to=".">COURSES</Link>
                        <ul className={`menu-mobile ${activeMenuIndex === 0 ? "menu-mobile-active " : ""
                            }`}>
                            <li className=' nav-item-mobile'>
                                <Link to="/courses-list-4-columns" className='nav-link-mobile text-white-color'>Courses List</Link>
                            </li>
                            <li className='nav-item-mobile'>
                                <Link to="/coursesingle" className='nav-link-mobile text-white-color'>Courses Single</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="mobile-nav-item my-dropdown-mobile"
                        onClick={() => toggleMenu(1)}><Link className='mobile-link' to=".">EVENT</Link>
                        <ul className={`menu-mobile ${activeMenuIndex === 1 ? "menu-mobile-active " : ""
                            }`}>
                            <li className=' nav-item-mobile'>
                                <Link to="/eventslist" className='nav-link-mobile text-white-color'>Events List</Link>
                            </li>
                            <li className='nav-item-mobile'>
                                <Link to="/eventsingle" className='nav-link-mobile text-white-color'>Events Single</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='mobile-nav-item my-dropdown-mobile' onClick={() => toggleMenu(2)}><Link to=".">PAGES</Link>
                        <ul className={`menu-mobile ${activeMenuIndex === 2 ? "menu-mobile-active " : ""
                            }`}>
                            <li className=' nav-item-mobile'>
                                <Link to="/ourteacher" className='nav-link-mobile text-white-color'>Our teachers</Link>
                            </li>
                            <li className='nav-item-mobile'>
                                <Link to="/about" className='nav-link-mobile text-white-color'>About</Link>
                            </li>
                            <li className='nav-item-mobile'>
                                <Link to="/aboutme" className='nav-link-mobile text-white-color'>About Me</Link>
                            </li>
                            <li className='nav-item-mobile'>
                                <Link to="/faq" className='nav-link-mobile text-white-color'>FAQ</Link>
                            </li>
                            <li className='nav-item-mobile'>
                                <Link to="/standart2columns" className='nav-link-mobile text-white-color'>Gallery</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='mobile-nav-item my-dropdown-mobile' onClick={() => toggleMenu(3)}>
                        <Link to=".">BLOG</Link>
                        <ul className={`menu-mobile ${activeMenuIndex === 3 ? "menu-mobile-active " : ""
                            }`}>
                            <li className=' nav-item-mobile'>
                                <Link to="/blog" className='nav-link-mobile text-white-color'>Standart List</Link>
                            </li>
                            <li className='nav-item-mobile'>
                                <Link to="/blog" className='nav-link-mobile text-white-color'>Masonry List</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='mobile-nav-item'><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>
        </>
    )
}

export default MobileNav