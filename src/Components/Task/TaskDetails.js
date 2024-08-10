import React, { useState } from "react";
import Sidebar from './Sidebar';
import TotalTasks from './TotalTasks';
import CompletedTasks from './CompletedTasks';
import YetToDoTasks from './YetToDoTasks';
import PendingTasks from './PendingTasks';
import '../../Assets/Styles/TaskDetails.css';

const TaskDetails = () => {
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedTask, setSelectedTask] = useState(null);

    const tasks = {
        completed: [
            { hr: "Alice", name: "Task 1", deadline: "2024-08-01", status: "Completed" },
            { hr: "Bob", name: "Task 2", deadline: "2024-08-05", status: "Completed" },
            { hr: "Hannah", name: "Task 8", deadline: "2024-08-20", status: "Completed" },
        ],
        yetToDo: [
            { hr: "Charlie", name: "Task 3", deadline: "2024-08-10", status: "Yet to Do" },
            { hr: "David", name: "Task 5", deadline: "2024-08-12", status: "Yet to Do" },
            { hr: "Ella", name: "Task 7", deadline: "2024-08-15", status: "Yet to Do" }
        ],
        pending: [
            { hr: "Frank", name: "Task 4", deadline: "2024-08-15", status: "Pending" },
            { hr: "Grace", name: "Task 6", deadline: "2024-08-18", status: "Pending" },
            { hr: "Ivan", name: "Task 9", deadline: "2024-08-22", status: "Pending" },
        ]
    };

    const handleStatusClick = (status) => {
        setSelectedStatus(status);
        setSelectedTask(null);
    };

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSelectedTask(null);
    };

    const getVisibleTasks = () => {
        if (selectedStatus === "all") {
            return [...tasks.completed, ...tasks.yetToDo, ...tasks.pending];
        }
        return tasks[selectedStatus] || [];
    };

    const taskCounts = {
        total: getVisibleTasks().length,
        completed: tasks.completed.length,
        yetToDo: tasks.yetToDo.length,
        pending: tasks.pending.length
    };

    return (
        <div className="task-details-container">
            <Sidebar onStatusClick={handleStatusClick} tasks={taskCounts} />
            <div className="content">
                {!selectedTask ? (
                    <>
                        {selectedStatus === "all" && <TotalTasks tasks={getVisibleTasks()} onTaskClick={handleTaskClick} />}
                        {selectedStatus === "completed" && <CompletedTasks tasks={tasks.completed} onTaskClick={handleTaskClick} />}
                        {selectedStatus === "yetToDo" && <YetToDoTasks tasks={tasks.yetToDo} onTaskClick={handleTaskClick} />}
                        {selectedStatus === "pending" && <PendingTasks tasks={tasks.pending} onTaskClick={handleTaskClick} />}
                    </>
                ) : (
                    <div className="task-form-container">
                        <form onSubmit={handleFormSubmit} className="task-form">
                            <h3>Update Task</h3>
                            <label>
                                Task Name:
                                <input type="text" defaultValue={selectedTask.name} /><br/>
                            </label>
                            <label>
                                Deadline:
                                <input type="date" defaultValue={selectedTask.deadline} /><br/>
                            </label>
                            <label>
                                Status:
                                <select defaultValue={selectedTask.status}><br/>
                                    <option value="Completed">Completed</option>
                                    <option value="Yet to Do">Yet to Do</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </label><br/>
                            <button type="submit">Update Task</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};


export default TaskDetails;