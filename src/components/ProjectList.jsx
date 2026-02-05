import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    return (
        <section className="projects">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}

        </section>
    );
}
export default ProjectList;