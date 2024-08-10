// src/components/Sidebar.js
import React from 'react';
import '../../Assets/Styles/Sidebar.css';

const Sidebar = ({ onStatusClick, tasks, onTotalProjectsClick }) => {
    return (
        <div className="sidebar">
            <h2>Project Dashboard</h2>
            <ul>
                <li onClick={() => onStatusClick("completed")}>Completed Projects</li>
                <li onClick={() => onStatusClick("yetToDo")}>Yet to Do</li>
                <li onClick={() => onStatusClick("pending")}>Pending</li>
                <li onClick={onTotalProjectsClick}>Total Projects ({tasks.total})</li>
            </ul>
        </div>
    );
};

export default Sidebar;
