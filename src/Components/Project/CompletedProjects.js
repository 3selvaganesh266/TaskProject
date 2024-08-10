// src/components/CompletedProjects.js
import React from 'react';
import '../../Assets/Styles/ProjectDetails.css'; // Assuming this is where your styles are located

const CompletedProjects = ({ projects, onProjectClick }) => {
    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`project-box ${project.status === "Completed" ? "completed" : ""}`}
                    onClick={() => onProjectClick(project)}
                >
                    <h3>{project.name}</h3>
                    <p><strong>HR:</strong> {project.hr}</p>
                    <p><strong>Deadline:</strong> {project.deadline}</p>
                    <p className="project-status">{project.status}</p>
                </div>
            ))}
        </div>
    );
};

export default CompletedProjects;
