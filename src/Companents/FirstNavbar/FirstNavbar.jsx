import React from "react";
import '../FirstNavbar/FirstNavbar.css'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const FirstNavbar = () => {
  return (
    <>
   <nav class="navbar navbar-expand-lg navbar-light w-100 justify-content-between navi">
  

    <ul class="navbar-nav mx-3">

      <li class="nav-item">
        <a class="nav-link" href="#">Student Home</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Call +44 300 303 0266</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Follow Us</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#"><AiFillFacebook/></a>
      </li>      <li class="nav-item">
        <a class="nav-link" href="#"><AiFillGithub/></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><AiFillLinkedin/></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><AiOutlineInstagram/></a>
      </li>

    </ul>

    <ul class="navbar-nav mx-3 ">
      <li class="nav-item">
        <a class="nav-link" href="#">English</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Register</a>
      </li>
      


    </ul>
  </nav>

    </>
  );
};

export default FirstNavbar;
