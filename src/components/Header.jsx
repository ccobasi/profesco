import React, { useState } from "react";
import "./Header.css";
import logo from '../components/img/logo2.png'
import { Link } from 'react-router-dom';

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link className='logo' to='/'>
                    <img src={logo} className="logo" />
    </Link>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/course" className="nav__link">
            Courses
          </a>
        </li>
        <li className="nav__item">
          <a href="/price" className="nav__link">
            Pricing
          </a>
        </li>
        <li className="nav__item">
          <a href="/signin" className="nav__link">
            Sign In
          </a>
        </li>
        <li className="nav__item">
          <a href="/signin" className="btn nav__link">
            Get Started
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;