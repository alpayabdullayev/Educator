import React from 'react'
import '../TopNavbar/topnavbar.css'

// Icons
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'

const Navbar = () => {

    return (
        <>
            <div className="top-navbar-white">
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
                        <select href="/" name="English">
                            <option value="-1">English</option>
                            <option value>French</option>
                            <option value>Russian</option>
                        </select>
                    </li>
                    <li className="right-side-items">
                        <a href=".">Login</a>
                    </li>
                    <li className="right-side-items">
                        <a href=".">Register</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar