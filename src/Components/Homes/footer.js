// import { Link } from 'react-router-dom';
// import '../../Assets/Styles/footer.css';

// const Footer = () => {
//   return (
//     <footer className='home-footer'>
//       <div className="footer-content">
//         <div className="footer-section about">
//           <h3 className="footer-title">About TaskManager</h3>
//           <p>
//             TaskManager helps you stay organized and efficient by managing your tasks and time effectively. Join us in enhancing productivity through smart task management solutions.
//           </p>
//         </div>
//         <div className="footer-section links">
//           <h3 className="footer-title">Quick Links</h3>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/features">Features</Link></li>
//             <li><Link to="/contact">Contact Us</Link></li>
//           </ul>
//         </div>
//         <div className="footer-section contact">
//           <h3 className="footer-title">Contact Us</h3>
//           <p>Email: support@taskmanager.com</p>
//           <p>Phone: +1 234 567 890</p>
//           <p>Address: 456 TaskManager Blvd, Productivity City, PC 12345</p>
//         </div>
//         <div className="footer-section social">
//           <h3 className="footer-title">Follow Us</h3>
//           <ul className="social-icons">
//             <li>
//               <Link className="facebook" to="https://www.facebook.com/taskmanager">
//                 <i className="fa-brands fa-facebook"></i>
//               </Link>
//             </li>
//             <li>
//               <Link className="twitter" to="https://www.twitter.com/taskmanager">
//                 <i className="fa-brands fa-twitter"></i>
//               </Link>
//             </li>
//             <li>
//               <Link className="linkedin" to="https://www.linkedin.com/company/taskmanager">
//                 <i className="fa-brands fa-linkedin"></i>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} TaskManager. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }; 
// export default Footer;



import { Link } from 'react-router-dom';
import '../../Assets/Styles/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported

const Footer = () => {
  return (
    <footer className='home-footer'>
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-title">About TaskManager</h3>
          <p>
            TaskManager helps you stay organized and efficient by managing your tasks and time effectively. Join us in enhancing productivity through smart task management solutions.
          </p>
        </div>
        <div className="footer-section links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3 className="footer-title">Contact Us</h3>
          <p>Email: support@taskmanager.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 456 TaskManager Blvd, Productivity City, PC 12345</p>
        </div>
        <div className="footer-section social">
          <h3 className="footer-title">Follow Us</h3>
          <ul className="social-icons">
            <li>
              <a className="facebook" href="https://www.facebook.com/taskmanager" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a className="twitter" href="https://www.twitter.com/taskmanager" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a className="linkedin" href="https://www.linkedin.com/company/taskmanager" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TaskManager. All rights reserved.</p>
      </div>
    </footer>
  );
}; 

export default Footer;
