import React from 'react';
import '../../Assets/Styles/features.css';

const Features = () => {
  return (
    <div className="homepage">
      <div className="header">
        <h1>Time and Task Management</h1>
        <p>Detailed Explanation of <strong>Time and Task Management System</strong></p>
      </div>
      <div className="content1">
        <div className="sidebar1">
          <div className="overview">
            <h3>Overview</h3>
            <p>Our Time and Task Management system streamlines the process of assigning and tracking tasks and projects within your organization.</p>
          </div> 
          <ul className="features">
            <li>Admin Assignment</li>
            <li>Employee Notification</li>
            <li>Task Completion and Updates</li>
          </ul>
        </div>
        <div className="main-content1">
          <h2>Introduction</h2> 
          <p>Our Time and Task Management system streamlines the process of assigning and tracking tasks and projects within your organization. The platform is designed to enhance productivity, ensure timely completion of tasks, and provide clear visibility into project progress for both administrators and employees.</p>
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <h3>Admin Assignment</h3>
              <p>Administrators can assign tasks or projects to employees through the admin interface. Each task comes with a detailed description, priority level, and a set deadline.</p>
            </div>
            <div className="step">
              <h3>Employee Notification</h3>
              <p>Employees receive instant notifications when a new task is assigned. Tasks are displayed with all relevant details, including deadlines and specific requirements.</p>
            </div>
            <div className="step">
              <h3>Task Completion and Updates</h3>
              <p>Employees work on their tasks, updating their progress within the system. Once a task is completed, employees can mark it as finished.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;