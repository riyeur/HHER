import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="nav-bar">
                <div className="nav-bar-left">
                    <img className="logo" src="../images/hher_logo.png" alt="HHER logo" height="90" width="auto"/>
                </div>
                <div className={`nav-bar-right ${isOpen ? 'open' : ''}`}>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about-us">About Us</Link></div>
                    <div><Link to="/infographics">Infographics</Link></div>
                    <div><Link to="/journal">Journal</Link></div>
                    <div><Link to="/our-team">Our Team</Link></div>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
