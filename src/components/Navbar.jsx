import styles from './Navbar.module.css';
import React from 'react'
import {AiOutlineMenu,AiOutlineClose,AiOutlineSearch,AiOutlineUser} from 'react-icons/ai'
import Logo from '../../src/images/logo.png'
import { Link, animateScroll as scroll } from 'react-scroll';
 import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
const Navbar = () => {
  return (
    <header className={styles.navbar}>
   <img src={Logo} alt="/" height='300px' />
   <nav>
    <ul className={styles.menu}>
    <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>

    </ul>
   </nav>
   <div className={styles.mobile_btn}>
    <AiOutlineMenu size={25}/>
   </div>
    </header>
  ) 
}

export default Navbar


