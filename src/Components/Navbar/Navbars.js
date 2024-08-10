// // import { Link } from "react-router-dom";
// // import { useAuth } from "../contexts/AuthContext";
// // import '../../Assets/Styles/Navbar.css';
// // import profile from '../../Assets/Images/profileicon.png';

// // const Navbars = () => {
// //   const { isAuthenticated } = useAuth(); 

// //   return (
// //     <nav className="navbar">
// //       <div className="title">
// //         <img src="logo.png" alt="Logo" className="logo-image" /> TIMESYNC
// //       </div>
// //       <ul className="nav-items">
// //         { !isAuthenticated ? (
// //           <>
// //             <li><Link to="/howitworks">How It Works</Link></li>
// //             <li><Link to="/aboutus">About Us</Link></li>
// //             <li><Link to="/contactus">Contact Us</Link></li>
// //             <li><Link to="/login">Login</Link></li>
// //             <li><Link to="/signup">Register</Link></li>
// //           </>
// //         ) : (
// //           <>
            
// //             {/* <li><Link to="/notifications"><span className="notification-icon">&#128276;</span></Link></li> */}
// //             <li><Link to="/profile"><img src={profile} alt="Profile" className="profile-image" /></Link></li>
// //             <li><Link to="/premium" className="premium-link">Premium</Link></li>
// //           </>
// //         )}
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbars;
// import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import { FaClock } from 'react-icons/fa';
// import '../../Assets/Styles/Navbar.css';
// import profile from '../../Assets/Images/profileicon.png';

// const Navbars = () => {
//   const { isAuthenticated } = useAuth(); 

//   return (
//     <nav className="navbar">
//       <div className="title">
//         <FaClock className="logo-icon" style={{marginLeft:'px'}}/> TIMESYNC
//       </div>
//       <ul className="nav-items">
//         { !isAuthenticated ? (
//           <>
//             <li><Link to="/features">How It Works</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/contact">Contact Us</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/signup">Register</Link></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/profile"><img src={profile} alt="Profile" className="profile-image" /></Link></li>
//             <li><Link to="/premium" className="premium-link">Premium</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbars;

// import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import '../../Assets/Styles/Navbar.css';
// import profile from '../../Assets/Images/profileicon.png';
// import logo from '../../Assets/Images/logofinal.jpeg'; // Update the path to your PNG image

// const Navbars = () => {
//   const { isAuthenticated } = useAuth(); 

//   return (
//     <nav className="navbar">
//       <div className="title">
//         <img src={logo} alt="Logo" className="logo-image" /> {/* Replace FaClock with PNG image */} 
//       </div> 
//       <ul className="nav-items">
//         { !isAuthenticated ? (
//           <>
//             {/* <li><Link to="/features">How It Works</Link></li> */}
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/contact">Contact Us</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/signup">Register</Link></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/profile"><img src={profile} alt="Profile" className="profile-image" /></Link></li>
//             <li><Link to="/premium" className="premium-link">Premium</Link></li>
//           </>
//         )} 
//       </ul> 
//     </nav> 
//   ); 
// }; 

// export default Navbars;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FiLogOut } from "react-icons/fi"; // Import the logout icon
import '../../Assets/Styles/Navbar.css';
import logo from '../../Assets/Images/logofinal.jpeg';

const Navbars = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Perform the logout logic, e.g., clearing user data
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="title">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <ul className="nav-items">
        {!isAuthenticated ? (
          <>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>
          </>
        ) : (
          <>
            <li style={{marginTop:'25px'}}>
              <button onClick={handleLogout}  className="logout-button">
                <FiLogOut size={24} />
              </button>
            </li>
            <li><Link to="/premium" className="premium-link">Premium</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbars;
