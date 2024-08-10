import React from 'react';

import '../../Assets/Styles/AboutUs.css';
import '../../Assets/Styles/Navbar.css';
import Navbars from './Navbars';

const About = () => {
  return (
    <div>
    <div>
      <Navbars />
      </div>
    <div className="about-us">
      <div className="header">
        <h1>About Us</h1>
        <p>Learn more about our mission and values</p>
      </div>
      <div className="content1">
        <div className="sidebar1">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>To provide an efficient and user-friendly platform that enhances productivity through effective task and project management.</p>
          </div>
          <div className="team">
            <h3>Meet the Team</h3>
            <p>Our team is composed of dedicated professionals who are passionate about delivering the best task management solutions.</p>
          </div>
        </div>
        <div className="main-content1">
          <h2>Who We Are</h2>
          <p>We are a group of experienced developers and project managers committed to creating a platform that simplifies task and project management for businesses of all sizes.</p>
          <h2>Our Values</h2>
          <div className="values">
            <div className="value">
              <h3>Innovation</h3>
              <p>We embrace new ideas and technologies to continuously improve our platform and meet the evolving needs of our users.</p>
            </div>
            <div className="value">
              <h3>Integrity</h3>
              <p>We uphold the highest standards of honesty and transparency in all our interactions with clients and stakeholders.</p>
            </div>
            <div className="value">
              <h3>Customer Success</h3>
              <p>We are dedicated to ensuring that our users achieve their goals and derive maximum value from our platform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
