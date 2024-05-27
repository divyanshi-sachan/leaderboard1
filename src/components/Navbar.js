// import React, { useState } from 'react';
// import './Navbar.css';
// import { FaBell, FaCoins, FaUser } from 'react-icons/fa';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img src="https://unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" alt="Logo" className="navbar-logo" />
//       </div>
//       <div className="navbar-right">
//         <FaBell className="navbar-icon" />
//         <div className="navbar-coins">
//           <FaCoins className="navbar-icon" />
//           <span>0</span>
//         </div>
//         <div className="navbar-profile" onClick={toggleDropdown}>
//           <FaUser className="navbar-icon" />
//           {dropdownOpen && (
//             <div className="dropdown-menu">
//               <a href="/profile">My Profile</a>
//               <a href="/earnings">My Earnings</a>
//               <a href="/fund">Fund</a>
//               <a href="/change-password">Change Password</a>
//               <a href="/logout">Logout</a>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';
// import './Navbar.css';
// import { FaBell, FaCoins, FaUser } from 'react-icons/fa';

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img src="https://unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" alt="Logo" className="navbar-logo" />
//       </div>
//       <div className="navbar-right">
//         <FaBell className="navbar-icon" />
//         <div className="navbar-coins">
//           <FaCoins className="navbar-icon" />
//           <span>0</span>
//         </div>
//         <div className="navbar-profile" onClick={toggleDropdown}>
//           <FaUser className="navbar-icon" />
//           {dropdownOpen && (
//             <div className="dropdown-menu">
//               <a href="/profile">My Profile</a>
//               <a href="/earnings">My Earnings</a>
//               <a href="/fund">Fund</a>
//               <a href="/change-password">Change Password</a>
//               <a href="/logout">Logout</a>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';
import { FaBell, FaCoins, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <FaBell className="navbar-icon" />
        <div className="navbar-coins">
          <FaCoins className="navbar-icon" />
          <span>0</span>
        </div>
        <div className="navbar-profile" onClick={toggleDropdown}>
          <FaUser className="navbar-icon" />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="/profile">My Profile</a>
              <a href="/earnings">My Earnings</a>
              <a href="/fund">Fund</a>
              <a href="/change-password">Change Password</a>
              <a href="/logout">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


