// import React from 'react';
// import ContributionsHeatmap from './ContributionsHeatmap';
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import '../../Assets/Styles/Mainpage.css';
// import logo from "../../Assets/Images/OIP2.jpg";
// import logo2 from "../../Assets/Images/OIP.jpg";


// const generateStreaks = (startDate, numStreaks) => {
//     const streaks = [];
//     let currentDate = new Date(startDate);

//     for (let i = 0; i < numStreaks; i++) {
//         streaks.push({
//             date: currentDate.toISOString().split('T')[0],
//             count: Math.floor(Math.random() * 4) + 1 
//         });
//         currentDate.setDate(currentDate.getDate() + 1); 
//     }

//     return streaks;
// };

// // Generate sample data with 42 streaks
// const sampleData = generateStreaks('2024-01-01', 238);

// const Mainpage = () => {
//     const navigate = useNavigate();
//     const { isAuthenticated, username } = useAuth(); 

//     const handleCardClick = (path) => {
//         navigate(path);
//     };

//     return (
//         <div className="mainpage-container">
//             <div className="welcome-box">
//                 <h2 className="welcome-text" style={{fontSize:'40px'}}>Hello {username}! 👋</h2>
//                 <h6 style={{fontSize:'20px'}}>This is a platform where you can be punctual and disciplined in your work.</h6>
//             </div>
//             <div className="cards-container" >
//                 <div className="card"  style={{marginRight:'50px'}} onClick={() => handleCardClick('/tasks')}>
//                     <img src={logo} alt="Task Logo" className="card-logo"/>
//                     <h2 className="card-header">TASKS</h2>
//                 </div>

//                 <div className="card" style={{marginRight:'50px'}}onClick={() => handleCardClick('/projects')}>
//                     <img src={logo2} alt="Project Logo" className="card-logo"/>
//                     <h2 className="card-header">PROJECTS</h2>
//                 </div>

//                 <div className="card" onClick={() => handleCardClick('/pomodoro')}>
//                     <img src={logo2} alt="Project Logo" className="card-logo"/>
//                     <h2 className="card-header">POMODORO</h2>
//                 </div>
                    
//             </div>
//             <div className="contributions-container" style={{marginTop:'100px'}}>
//                 <ContributionsHeatmap data={sampleData} />
//             </div>
//         </div>
//     );
// };

// export default Mainpage;


import React from 'react';
import ContributionsHeatmap from './ContributionsHeatmap';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import '../../Assets/Styles/Mainpage.css';
import logo from "../../Assets/Images/OIP2.jpg";
import logo2 from "../../Assets/Images/OIP.jpg";

const generateStreaks = (startDate, numStreaks) => {
    const streaks = [];
    let currentDate = new Date(startDate);

    for (let i = 0; i < numStreaks; i++) {
        streaks.push({
            date: currentDate.toISOString().split('T')[0],
            count: Math.floor(Math.random() * 4) + 1 
        });
        currentDate.setDate(currentDate.getDate() + 1); 
    }

    return streaks;
};

// Generate sample data with 42 streaks
const sampleData = generateStreaks('2024-01-01', 238);

const Mainpage = () => {
    const navigate = useNavigate();
    const { isAuthenticated, username } = useAuth(); 

    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <div className="mainpage-container">
            <div className="welcome-box">
                <h2 className="welcome-text">Hello  {username} 👋</h2>
                <h6>This is a platform where you can be punctual and disciplined in your work.</h6>
            </div>
            <div className="cards-container">
                <div className="card" style={{marginRight:'50px'}} onClick={() => handleCardClick('/tasks')}>
                    <img src={logo} alt="Task Logo" className="card-logo"/>
                    <h2 className="card-header">TASKS</h2>
                </div>

                <div className="card" style={{marginRight:'50px'}} onClick={() => handleCardClick('/projects')}>
                    <img src={logo2} alt="Project Logo" className="card-logo"/>
                    <h2 className="card-header">PROJECTS</h2>
                </div>

                <div className="card" onClick={() => handleCardClick('/pomodoro')}>
                    <img src={logo2} alt="Project Logo" className="card-logo"/>
                    <h2 className="card-header">POMODORO</h2>
                </div>
                    
            </div>
            <div className="contributions-container">
                <ContributionsHeatmap data={sampleData} />
            </div>
        </div>
    );
};

export default Mainpage;
