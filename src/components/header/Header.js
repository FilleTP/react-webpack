import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../images/logo.svg';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="nav">
        <div className="nav-logo-div">
          <img className="logo" src={Logo}></img>
          <h3>ReactFacts</h3>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item dropdown" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="dropdown-toggle">
              Menu
            </button>
            {dropdownOpen && (
              <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <li className="dropdown-item"><Link to="/">Home</Link></li>
                <li className="dropdown-item"><Link to="/contact">Contact</Link></li>
                <li className="dropdown-item"><Link to="#">About</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
