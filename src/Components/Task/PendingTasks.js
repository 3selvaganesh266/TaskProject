import React from 'react';
import '../../Assets/Styles/PendingTasks.css';

const PendingTasks = ({ tasks, onTaskClick }) => (
    <div className="task-section pending-tasks-section">
        <h3>Pending Tasks</h3>
        <div className="task-list">
            {tasks.map((task, index) => {
                const statusClass = task.status.toLowerCase().replace(/\s+/g, '-');
                return (
                    <div className={`task-box pending ${statusClass}`} key={index} onClick={() => onTaskClick(task)}>
                        <h3>{task.name}</h3>
                        <p><strong>HR:</strong> {task.hr}</p>
                        <p><strong>Deadline:</strong> {task.deadline}</p>
                        <p className={`task-status ${statusClass}`}>{task.status}</p>
                    </div>
                );
            })}
        </div>
    </div>
);

export default PendingTasks;
