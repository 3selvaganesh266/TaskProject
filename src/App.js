import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomePage from './Components/Homes/Home';
import LoginForm from './Components/static/LoginForm';
import LoginSignup from './Components/static/LoginSignup';
import { AuthProvider } from './Components/contexts/AuthContext';
import TaskDetails from './Components/Task/TaskDetails';
import ProjectDetails from './Components/Project/ProjectDetails';
import PremiumPage from './Components/Navbar/PremiumPage';
import FeedbackPage from './Components/Homes/FeedbackPage';
import ProfilePage from './Components/Homes/ProfilePage';
import Features from './Components/Navbar/Features';
import About from './Components/Navbar/About';
import { Contact } from 'lucide-react';
import ContactUsPage from './Components/Navbar/Contact';
import Login from './Components/Admin/Login';
import Main from './Components/Admin/Main';
import Time from './Components/Homes/Time';







const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/tasks" element={<TaskDetails />} />
          <Route path="/projects" element={<ProjectDetails />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/adlogin" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/pomodoro" element={<Time />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
