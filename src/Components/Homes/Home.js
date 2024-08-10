// import React from 'react';
// import Navbars from "../Navbar/Navbars";
// import { useNavigate } from 'react-router-dom';
// import '../../Assets/Styles/home.css';
// import { useAuth } from "../contexts/AuthContext";
// import Mainpage from './Mainpage';
// import Footer from './footer';
// import FeedbackButton from './FeedbackButton';

// const HomePage = () => {
//   const navigate = useNavigate(); 
//   const { isAuthenticated, username } = useAuth(); 

//   const handleCardClick = (path) => {
//     navigate(path);
//   };
   
//   return (
//     <div>
//       <Navbars/>
//       <div className="home-container">
//         {!isAuthenticated ? (
//           <>
//             <div className="text-section">
//               <h1>Welcome to TimeSync</h1>
//               <p>Seamlessly manage tasks and projects: Get assignments, track progress, and update status to keep projects on schedule and organized. Explore the features and get started!</p>
//               <button onClick={() => navigate('/explore')}>
//                 Explore Features 
//               </button>

//             </div>
//             <div className="image-section">
//               <img
//                 src='https://img.freepik.com/free-vector/businessman-sets-goals-runs-up-graph-columns-success-time-self-management-self-regulation-learning-self-organization-course-concept_335657-359.jpg?t=st=1721929993~exp=1721933593~hmac=6c8059373796579be766089b76fa546a9c8834519b3facf5e810676d4d073e5d&w=996'
//                 alt='logo'
//               />
//             </div>
//           </>
//         ) : (
//           <>
//             <Mainpage />
//           </>
//         )}
//       </div>
//       {!isAuthenticated ? (
//         <>
//        <Footer />
//       </>):(<>
//         <FeedbackButton />

//       </>)}
//     </div>
//   );
// };

// export default HomePage;

// // import React from 'react';
// // import Navbars from "../Navbar/Navbars";
// // import { useNavigate } from 'react-router-dom';
// // import '../../Assets/Styles/home.css';
// // import { useAuth } from "../contexts/AuthContext";
// // import Mainpage from './Mainpage';
// // import Footer from './footer';
// // import FeedbackButton from './FeedbackButton';

// // const HomePage = () => {
// //   const navigate = useNavigate();
// //   const { isAuthenticated, username } = useAuth();

// //   const cards = [
// //     { title: 'Mountain View', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
// //     { title: 'To The Beach', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
// //     { title: 'Desert Destinations', copy: "It's the desert you've always dreamed of", button: 'Book Now' },
// //     { title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }
// //   ];

// //   return (
// //     <div>
// //       <Navbars />
// //       <div className="home-container">
// //         {!isAuthenticated ? (
// //           <>
// //             <div className="text-section">
// //               <h1>Welcome to TimeSync</h1>
// //               <p>Seamlessly manage tasks and projects: Get assignments, track progress, and update status to keep projects on schedule and organized. Explore the features and get started!</p>
// //               <button onClick={() => navigate('/explore')}>
// //                 Explore Features
// //               </button>
// //             </div>
// //             <div className="image-section">
// //               <img
// //                 src='https://img.freepik.com/free-vector/businessman-sets-goals-runs-up-graph-columns-success-time-self-management-self-regulation-learning-self-organization-course-concept_335657-359.jpg?t=st=1721929993~exp=1721933593~hmac=6c8059373796579be766089b76fa546a9c8834519b3facf5e810676d4d073e5d&w=996'
// //                 alt='logo'
// //               />
// //             </div>
// //             <div className="cards-section">
// //               <div className="page-content">
// //                 {cards.map((card, index) => (
// //                   <div className="card" key={index}>
// //                     <div className="content">
// //                       <h2 className="title">{card.title}</h2>
// //                       <p className="copy">{card.copy}</p>
// //                       <button className="btn">{card.button}</button>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </>
// //         ) : (
// //           <Mainpage />
// //         )}
// //       </div>
// //       {!isAuthenticated ? (
// //         <Footer />
// //       ) : (
// //         <FeedbackButton />
// //       )}
// //     </div>
// //   );
// // };

// // export default HomePage;




import React from 'react';
import Navbars from "../Navbar/Navbars";
import { useNavigate } from 'react-router-dom';
import '../../Assets/Styles/home.css';
import { useAuth } from "../contexts/AuthContext";
import Mainpage from './Mainpage';
import Footer from './footer';
import FeedbackButton from './FeedbackButton';
import Home1 from './Home1';
import ho from '../../Assets/Images/home5.jpeg';

const HomePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, username } = useAuth();

  // Handle navigation based on authentication
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Navbars />
      <div className="home-container">
        {!isAuthenticated ? (
          <>
            <div className="text-section">
              <h1>Welcome to TimeSync</h1>
              <p> Seamlessly manage tasks and projects: Get assignments, track progress, and update status to keep projects on schedule and organized. Explore the features and get started!</p>
              <button onClick={() => navigate('/features')}>
                Explore Features 
              </button>
            </div>
            <div className="image-section">
              <img
                src={ho}
                alt='logo'
              />
            </div>
          </>
        ) : (
          <>
            <Mainpage />
            <FeedbackButton />
          </>
        )}
      </div>
      {!isAuthenticated ? (
        <>
        <Home1/>
        <Footer/>
        </>
      ) : <></>}
    </div>
  );
};

export default HomePage;
