import React from 'react';
import '../../Assets/Styles/TotalTasks.css';

const TotalTasks = ({ tasks, onTaskClick }) => (
    <div className="task-list">
        {tasks.map((task, index) => {
            // Determine the status color class
            const statusClass = task.status.toLowerCase().replace(/\s+/g, '-');
            return (
                <div className="task-box total" key={index} onClick={() => onTaskClick(task)}>
                    <h3>{task.name}</h3>
                    <p><strong>HR:</strong> {task.hr}</p>
                    <p><strong>Deadline:</strong> {task.deadline}</p>
                    <p className={`task-status ${statusClass}`}>{task.status}</p>
                </div>
            );
        })}
    </div>
);

export default TotalTasks;
