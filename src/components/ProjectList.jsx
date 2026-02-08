import ProjectCard from "./ProjectCard";

function ProjectList({ projects, onDelete }) {
    return (
        <section className="projects">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project}
                onDelete={onDelete}
                />
            ))}

        </section>
    );
}
export default ProjectList;