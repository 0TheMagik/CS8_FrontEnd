import React, { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = ({ logo, logoName }) => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="logo-container">
                <img src={logo} alt="Oracle" className="oracle-logo" />
                <img src={logoName} alt="Oracle" className="oracle-logo-name" />
            </div>
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-item">
                    <a href="#products">Products</a>
                    <div className="mega-menu">
                        <div className="mega-menu-content">
                            <div className="mega-menu-section">
                                <h3>Oracle Cloud Infrastructure</h3>
                                <ul>
                                    <li><a href="#">OCI Overview</a></li>
                                    <li><a href="#">AI and Machine Learning</a></li>
                                    <li><a href="#">Analytics</a></li>
                                    <li><a href="#">Compute</a></li>
                                    <li><a href="#">Database Services</a></li>
                                    <li><a href="#">Developer Services</a></li>
                                    <li><a href="#">Integration</a></li>
                                    <li><a href="#">Migration and Disaster Recovery Services</a></li>
                                </ul>
                            </div>
                            <div className="mega-menu-section">
                                <h3>Oracle Cloud Applications</h3>
                                <ul>
                                    <li><a href="#">Applications Overview</a></li>
                                    <li><a href="#">Enterprise Resource Planning (ERP)</a></li>
                                    <li><a href="#">Supply Chain & Manufacturing (SCM)</a></li>
                                    <li><a href="#">Human Capital Management (HCM)</a></li>
                                    <li><a href="#">— Supply Chain Planning</a></li>
                                    <li><a href="#">— Manufacturing</a></li>
                                    <li><a href="#">— Maintenance</a></li>
                                    <li><a href="#">— Product Lifecycle Management</a></li>
                                </ul>
                            </div>
                            <div className="mega-menu-section">
                                <h3>Software</h3>
                                <ul>
                                    <li><a href="#">Java</a></li>
                                    <li><a href="#">Oracle Database</a></li>
                                    <li><a href="#">MySQL</a></li>
                                    <li><a href="#">NoSQL</a></li>
                                    <li><a href="#">Linux</a></li>
                                    <li><a href="#">Virtualization</a></li>
                                    <li><a href="#">Operating Systems</a></li>
                                </ul>
                            </div>
                            <div className="mega-menu-section">
                                <h3>Hardware</h3>
                                <ul>
                                    <li><a href="#">Engineered Systems</a></li>
                                    <li><a href="#">Servers</a></li>
                                    <li><a href="#">Storage</a></li>
                                    <li><a href="#">Networking</a></li>
                                    <li><a href="#">All Hardware</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#solutions">Solutions</a>
                <a href="#industries">Industries</a>
                <a href="#resources">Resources</a>
            </div>
            <div className="navbar-buttons">
                <button className="login-btn">Login</button>
                <button className="try-free-btn">Try Free</button>
            </div>
            <div className="mobile-menu-btn" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;