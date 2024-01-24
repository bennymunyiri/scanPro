import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Headers() {
    // State to manage dropdown visibility
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="header">
            <div className="logo">
                <p className="name">scanPro</p>
            </div>
            <div className={`nav ${isDropdownVisible ? 'dropdown-visible' : ''}`}>
                <div className="nav-toggle" onClick={toggleDropdown}>
                    {/* Icon or text for the dropdown toggle */}
                    ☰
                </div>
                <ul className={`nav-links ${isDropdownVisible ? 'dropdown' : ''}`}>
                    <li className='links'>
                        <Link className="links" to="/home">Home</Link>
                    </li>
                    <li className="links">
                        <Link className="links" to="/contact">Contact Us</Link>
                    </li>
                    <li className="links">Our Products</li>

                </ul>
            </div>
        </div>
    );
}
