import React from 'react';
import '../../Assets/Styles/TotalCompletionStatus.css';

const TotalCompletionStatus = () => {
    return (
        <div className="status-card">
            <h3>Total Completion Status</h3>
            <div className="status-content">
                <div className="status-circle">
                    <p>5/10</p>
                    <p>Test Status Count</p> 
                </div>
                <ul className="status-list">
                    <li><span className="status-color green"></span>Completed: 5%</li>
                    <li><span className="status-color red"></span>Not Completed: 1%</li>
                    <li><span className="status-color yellow"></span>Not Started: 5%</li>
                </ul>
            </div>
            <button className="status-refresh">Load</button>
        </div>
    );
};

export default TotalCompletionStatus;
