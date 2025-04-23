import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
            <h3>Products</h3>
            <ul>
                <li><a href="#">Oracle Cloud Infrastructure</a></li>
                <li><a href="#">Oracle Cloud Applications</a></li>
                <li><a href="#">Database</a></li>
                <li><a href="#">Java</a></li>
                <li><a href="#">Analytics</a></li>
            </ul>
            </div>
            
            <div className="footer-section">
            <h3>Solutions</h3>
            <ul>
                <li><a href="#">Finance</a></li>
                <li><a href="#">Human Resources</a></li>
                <li><a href="#">Supply Chain</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">IT Operations</a></li>
            </ul>
            </div>
            
            <div className="footer-section">
            <h3>Industries</h3>
            <ul>
                <li><a href="#">Financial Services</a></li>
                <li><a href="#">Healthcare</a></li>
                <li><a href="#">Manufacturing</a></li>
                <li><a href="#">Retail</a></li>
                <li><a href="#">Public Sector</a></li>
            </ul>
            </div>
            
            <div className="footer-section">
            <h3>Resources</h3>
            <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Developer Resources</a></li>
                <li><a href="#">Training and Certification</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Partners</a></li>
            </ul>
            </div>
            
            <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-icons">
                <a href="#" className="social-icon">FB</a>
                <a href="#" className="social-icon">TW</a>
                <a href="#" className="social-icon">LI</a>
                <a href="#" className="social-icon">YT</a>
            </div>
            <div className="newsletter">
                <h4>Subscribe to our newsletter</h4>
                <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
                </div>
            </div>
            </div>
        </div>
        
        <div className="footer-bottom">
            <div className="copyright">
            <p>&copy; 2025 Oracle Corporation. All rights reserved.</p>
            </div>
            <div className="legal-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Sitemap</a>
            </div>
        </div>
    </footer>
    );
};

export default Footer;