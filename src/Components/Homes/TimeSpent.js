import React from 'react';
import '../../Assets/Styles/TimeSpent.css';

const TimeSpent = () => {
    return (
        <div className="time-spent-card">
            <h3>Time Spent</h3>
            <div className="time-spent-content">
                <div className="time-bubble big">
                    <p>1 Day</p>
                    <p>05:00 hrs</p>
                    <p>Learning Contents</p>
                </div>
                <div className="time-bubble medium">
                    <p>00:03:20 hrs</p>
                    <p>Assessment</p>
                </div>
                <div className="time-bubble small">
                    <p>00:01:40 hrs</p>
                    <p>Practice</p>
                </div>
            </div>
            <button className="time-refresh">Load</button>
        </div>
    );
};

export default TimeSpent;
