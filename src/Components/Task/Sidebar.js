import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ListAlt, CheckCircle, HourglassEmpty, HourglassFull } from '@mui/icons-material';
import '../../Assets/Styles/Sidebar.css';

const Sidebar = ({ onStatusClick, tasks }) => {
    const { username } = useAuth();

    const iconStyle = { color: 'green', marginbottom: '1000px' };

    return (
        <div className="sidebar">
            <h2>Hello {username}! 👋</h2>
            <ul>
                <li className="total-tasks" onClick={() => onStatusClick("all")}>
                    <ListAlt style={{ marginTop: '5px' }} /> TOTALTASKS: {tasks.total}
                </li>
                <li className="pending-tasks" onClick={() => onStatusClick("pending")}>
                    <HourglassFull style={{ color: 'red', marginTop: '5px' }} /> NOT YET STARTED: {tasks.pending}
                </li>
                <li className="yet-to-do-tasks" onClick={() => onStatusClick("yetToDo")}>
                    <HourglassEmpty style={{ color: 'orange', marginTop: '5px' }} /> PARTIALLYCOMPLETED: {tasks.yetToDo}
                </li>
                <li className="completed-tasks" onClick={() => onStatusClick("completed")}>
                    <CheckCircle style={iconStyle} /> COMPLETED: {tasks.completed}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
