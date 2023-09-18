"use client"
import React from "react";
import "./navbarStyle.css"
import { Link } from 'react-scroll';
//import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="nav mt-10">
      <ul>
      <li>
          <Link  className="navlink group" to="me" spy={true} smooth={true} offset={0} duration={100}  activeClass="active-link">
            <span className="line"></span>
            <span className="text" >Hero</span>
          </Link>
        </li>
        <li>
          <Link  className="navlink group" to="about" spy={true} smooth={true} offset={0} duration={100} activeClass="active-link">
            <span className="line"></span>
            <span className="text" >About</span>
          </Link>
        </li>
        <li>
          <Link className="navlink group" to="experience" spy={true} smooth={true} offset={0} duration={100} activeClass="active-link">
            <span className="line"></span>
            <span className="text">Experience</span>
          </Link>
        </li>

        <li>
          <Link  className="navlink group" to="skills" spy={true} smooth={true} offset={0} duration={100} activeClass="active-link">
            <span className="line"></span>
            <span className="text">Skills</span>
          </Link>
        </li>
        <li>
          <Link className="navlink group" to="projects" spy={true} smooth={true} offset={0} duration={100} activeClass="active-link">
            <span className="line"></span>
            <span className="text">Projects</span>
          </Link>
        </li>
        
        <li>
          <a
            href="https://oluwaseun-ao-resume.tiiny.site"
            target="_blank"
            download={true}
            className="navlink group"
          >
            <span className="line"></span>
            <span className="text">.Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
