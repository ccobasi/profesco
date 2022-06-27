import React from 'react'
import logo2 from '../components/img//logo2.png'


const Footer = () => {
    return (
        <footer>
            <div className="footer-heading">
            <div className="footer-logo">
                <img src={logo2} alt="profesco logo" />
                <p>
                    &copy; 2022 professco
                </p>
            </div>
            
            </div>
            <div className="footer-wrapper">
                <div className="course-products">
                    <p>ACCA Courses</p>
                    <p>CIMA Courses</p>
                    <p>ICAN Courses</p>
                    <p>ACCA Products</p>
                    <p>ICAN Products</p>
                    <p>CIMA Products</p>
                </div>
                <div className="Blog">
                    <p>Blog</p>
                    <p>FAQ</p>
                    <p>Tutors</p>
                    <p>Careers</p>
                    <p>Testimonials</p>
                </div>
                <div className="Help">
                    <p>Help</p>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>

                <div className="link">
                <ul>
                    <li><i className="fab fa-facebook fa-2x"></i></li>
                    <li><i className="fab fa-twitter fa-2x"></i></li>
                    <li><i className="fab fa-linkedin fa-2x"></i></li>
                </ul>
            </div>
                
            </div>

        </footer>
    )
}

export default Footer
