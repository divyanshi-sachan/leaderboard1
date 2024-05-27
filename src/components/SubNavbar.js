import React, { useState } from 'react';
import './SubNavbar.css';

const SubNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="sub-navbar">
      <ul className="sub-navbar-list">
        <li className="sub-navbar-item">Leaderboard</li>
        <li className="sub-navbar-item">
          <div onClick={toggleDropdown} className="dropdown-toggle">Historical Trading</div>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Trading</li>
              <li className="dropdown-item">Order</li>
              <li className="dropdown-item">Holding</li>
              <li className="dropdown-item">Position</li>
            </ul>
          )}
        </li>
        <li className="sub-navbar-item">Historical Chart</li>
        <li className="sub-navbar-item">Scanners</li>
        <li className="sub-navbar-item">Alert</li>
        <li className="sub-navbar-item">Basic Backtest</li>
        <li className="sub-navbar-item">Advanced Backtest</li>
        <li className="sub-navbar-item">Pricing</li>
        <li className="sub-navbar-item">My Earnings</li>
      </ul>
    </nav>
  );
};

export default SubNavbar;
