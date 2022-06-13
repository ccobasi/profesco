import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../components/img/logo2.png'
import menu from '../components/img/menu.png'

const Header = () => {
    return (
        <div className="header">
            <img src={menu} alt="burger" className="menu" />
            <header>
                <Link className='logo' to='/'>
                    <img src={logo} className="logo" />
                </Link>
                
                <nav>
                <NavLink exact="true" className="home-link" activeclassname="active" to="/">
                    Home
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                About
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="course-link" to="/course">
                Courses
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="price-link" to="/price">
                Pricing
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="signin-link" to="/signin">
                Sign In
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="btn get-started-link" to="/signin">
                Get Started
            </NavLink>
                    
                </nav>
            </header>
        </div>
    )
}


export default Header
