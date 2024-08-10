import React from 'react';
import '../../Assets/Styles/CompletedTasks.css';

const CompletedTasks = ({ tasks, onTaskClick }) => (
    <div className="task-section completed-tasks-section">
        <h3>Completed Tasks</h3>
        <div className="task-list">
            {tasks.map((task, index) => {
                const statusClass = task.status.toLowerCase().replace(/\s+/g, '-');
                return (
                    <div className={`task-box completed ${statusClass}`} key={index} onClick={() => onTaskClick(task)}>
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

export default CompletedTasks;
