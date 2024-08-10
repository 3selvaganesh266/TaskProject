// import React, { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";
// import '../../Assets/Styles/ProjectDetails.css';

// const ProjectDetails = () => {
//     const { username } = useAuth();
//     const [selectedStatus, setSelectedStatus] = useState("all");
//     const [selectedProject, setSelectedProject] = useState(null);

//     const projects = {
//         completed: [
//             { manager: "Alice", name: "Project A", deadline: "2024-08-01", status: "Completed" },
//             { manager: "Bob", name: "Project B", deadline: "2024-08-05", status: "Completed" },
//             { manager: "Ivan", name: "Project I", deadline: "2024-08-22", status: "Completed" },
//         ],
//         yetToDo: [
//             { manager: "Charlie", name: "Project C", deadline: "2024-08-10", status: "Yet to Do" },
//             { manager: "David", name: "Project D", deadline: "2024-08-12", status: "Yet to Do" },
//             { manager: "Ella", name: "Project E", deadline: "2024-08-15", status: "Yet to Do" }
//         ],
//         pending: [
//             { manager: "Frank", name: "Project F", deadline: "2024-08-15", status: "Pending" },
//             { manager: "Grace", name: "Project G", deadline: "2024-08-18", status: "Pending" },
//             { manager: "Hannah", name: "Project H", deadline: "2024-08-20", status: "Pending" },
//             { manager: "Jack", name: "Project J", deadline: "2024-08-25", status: "Pending" }
//         ]
//     };

//     const handleStatusClick = (status) => {
//         setSelectedStatus(status);
//         setSelectedProject(null);
//     };

//     const handleProjectClick = (project) => {
//         setSelectedProject(project);
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         // Code to update the project status can be added here.
//         setSelectedProject(null);
//     };

//     const getVisibleProjects = () => {
//         if (selectedStatus === "all") {
//             return [...projects.completed, ...projects.yetToDo, ...projects.pending];
//         }
//         return projects[selectedStatus];
//     };

//     const getProjectCount = (status) => {
//         return projects[status]?.length || 0;
//     };
//     return (
//         <div className="project-details-container">
//             <div className="sidebar">
//                 <h2>Hello {username}! 👋</h2>
//                 <ul>
//                     <li className="total-projects" onClick={() => handleStatusClick("all")}>
//                         Total Projects: {getProjectCount("completed") + getProjectCount("yetToDo") + getProjectCount("pending")}
//                     </li>
//                     <li className="completed-projects" onClick={() => handleStatusClick("completed")}>
//                         Completed: {getProjectCount("completed")}
//                     </li>
//                     <li className="yet-to-do-projects" onClick={() => handleStatusClick("yetToDo")}>
//                         Yet to Do: {getProjectCount("yetToDo")}
//                     </li>
//                     <li className="pending-projects" onClick={() => handleStatusClick("pending")}>
//                         Pending: {getProjectCount("pending")}
//                     </li>
//                 </ul>
//             </div>
//             <div className="content">
//                 {!selectedProject ? (
//                     <div className="project-list">
//                         {getVisibleProjects().map((project, index) => (
//                             <div className={`project-box ${project.status.toLowerCase().replace(/ /g, '-')}`} key={index} onClick={() => handleProjectClick(project)}>
//                                 <h3>{project.name}</h3>
//                                 <p><strong>Manager:</strong> {project.manager}</p>
//                                 <p><strong>Deadline:</strong> {project.deadline}</p>
//                                 <p className={`project-status ${project.status.toLowerCase().replace(/ /g, '-')}`}>
//                                     {project.status}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="project-form-container">
//                         <form onSubmit={handleFormSubmit} className="project-form">
//                             <h3>Update Project</h3>
//                             <label>
//                                 Name:
//                                 <input type="text" value={selectedProject.name} readOnly />
//                             </label>
//                             <label>
//                                 Manager:
//                                 <input type="text" value={selectedProject.manager} readOnly />
//                             </label>
//                             <label>
//                                 Deadline:
//                                 <input type="date" value={selectedProject.deadline} readOnly />
//                             </label>
//                             <label>
//                                 Status:
//                                 <select
//                                     value={selectedProject.status}
//                                     onChange={(e) =>
//                                         setSelectedProject({ ...selectedProject, status: e.target.value })
//                                     }
//                                 >
//                                     <option value="Completed">Completed</option>
//                                     <option value="Yet to Do">Yet to Do</option>
//                                     <option value="Pending">Pending</option>
//                                 </select>
//                             </label>
//                             <button type="submit">
//                                 {selectedProject.status === "Completed" ? "Project is Completed" : "Update Project"}
//                             </button>
//                         </form>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProjectDetails;








import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { ListAlt, CheckCircle, HourglassEmpty, HourglassFull } from '@mui/icons-material';
import '../../Assets/Styles/ProjectDetails.css';

const ProjectDetails = () => {
    const { username } = useAuth();
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = {
        completed: [
            { manager: "Alice", name: "Project A", deadline: "2024-08-01", status: "Completed" },
            { manager: "Bob", name: "Project B", deadline: "2024-08-05", status: "Completed" },
            { manager: "Ivan", name: "Project I", deadline: "2024-08-22", status: "Completed" }, 
        ],
        yetToDo: [
            { manager: "Charlie", name: "Project C", deadline: "2024-08-10", status: "Yet to Do" },
            { manager: "David", name: "Project D", deadline: "2024-08-12", status: "Yet to Do" },
            { manager: "Ella", name: "Project E", deadline: "2024-08-15", status: "Yet to Do" }
        ],
        pending: [
            { manager: "Frank", name: "Project F", deadline: "2024-08-15", status: "Pending" },
            { manager: "Grace", name: "Project G", deadline: "2024-08-18", status: "Pending" },
            { manager: "Hannah", name: "Project H", deadline: "2024-08-20", status: "Pending" },
            { manager: "Jack", name: "Project J", deadline: "2024-08-25", status: "Pending" }
        ]
    };

    const handleStatusClick = (status) => {
        setSelectedStatus(status);
        setSelectedProject(null);
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Code to update the project status can be added here.
        setSelectedProject(null);
    };

    const getVisibleProjects = () => {
        if (selectedStatus === "all") {
            return [...projects.completed, ...projects.yetToDo, ...projects.pending];
        }
        return projects[selectedStatus];
    };

    const getProjectCount = (status) => {
        return projects[status]?.length || 0;
    };

    const iconStyle = { marginTop: '5px' };

    return (
        <div className="project-details-container">
            <div className="sidebar">
                <h2>Hello {username}! 👋</h2> 
                <ul>
                    <li className="total-projects" onClick={() => handleStatusClick("all")}>
                        <ListAlt style={iconStyle} /> TOTAL PROJECTS: {getProjectCount("completed") + getProjectCount("yetToDo") + getProjectCount("pending")}
                    </li>
                    <li className="pending-projects" onClick={() => handleStatusClick("pending")}>
                        <HourglassFull style={{ ...iconStyle, color: 'red' }} /> NOT YET STARTED: {getProjectCount("pending")}
                    </li>
                    <li className="yet-to-do-projects" onClick={() => handleStatusClick("yetToDo")}>
                        <HourglassEmpty style={{ ...iconStyle, color: 'orange' }} /> PARTIALLYCOMPLETED: {getProjectCount("yetToDo")}
                    </li>
                    <li className="completed-projects" onClick={() => handleStatusClick("completed")}>
                        <CheckCircle style={{ ...iconStyle, color: 'green' }} /> COMPLETED: {getProjectCount("completed")}
                    </li>
                </ul>
            </div>
            <div className="content">
                {!selectedProject ? (
                    <div className="project-list">
                        {getVisibleProjects().map((project, index) => (
                            <div className={`project-box ${project.status.toLowerCase().replace(/ /g, '-')}`} key={index} onClick={() => handleProjectClick(project)}>
                                <h3>{project.name}</h3>
                                <p><strong>Manager:</strong> {project.manager}</p>
                                <p><strong>Deadline:</strong> {project.deadline}</p>
                                <p className={`project-status ${project.status.toLowerCase().replace(/ /g, '-')}`}>
                                    {project.status}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="project-form-container">
                        <form onSubmit={handleFormSubmit} className="project-form">
                         <h3>Update Project</h3>
                            <label>
                                Name:
                                <input type="text" value={selectedProject.name} readOnly />
                            </label>
                            <label>
                                Manager:
                                <input type="text" value={selectedProject.manager} readOnly />
                            </label>
                            <label>
                                Deadline:
                                <input type="date" value={selectedProject.deadline} readOnly />
                            </label>
                            <label>
                                Status:
                                <select
                                    value={selectedProject.status} 
                                    onChange={(e) =>
                                        setSelectedProject({ ...selectedProject, status: e.target.value })
                                    }
                                >
                                    <option value="Completed">Completed</option>
                                    <option value="Yet to Do">Yet to Do</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </label>
                            <button type="submit">
                                {selectedProject.status === "Completed" ? "Project is Completed" : "Update Project"}
                            </button>  
                        </form> 
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;
