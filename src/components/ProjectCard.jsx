function ProjectCard({ project, onDelete }) {
    return (
        <div className="project-card">
            <button 
            className="delete-btn"
            onClick={() => onDelete(project.id)}
            >
                x

            </button>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    );
}
export default ProjectCard;