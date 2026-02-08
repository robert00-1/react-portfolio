import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
    const [projects, setProjects] = useState([
        { id: 1, title: "Portfolio Website", description: "Personal portfolio" },
        { id: 2, title: "Calculatar App", description: "Solving Problem app" }
    ]);

    const [search, setSearch] = useState("");

    // Add new project
    const addProject = (newProject) => {
        setProjects([...projects, newProject]);
    };

    // Delete project by id
    const deleteProject = (id) => {
        setProjects(projects.filter((project) => project.id !== id));
    };

    // Filter projects based on search input
    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Header /> 
            <ProjectForm addProject={addProject} />

            
            <div 
                style={{
                    maxWidth: "400px",
                    margin: "20px auto",
                    border: "1px solid #000",
                    borderRadius: "8px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center"
                }}
            >
                
                <input 
                    type="text"
                    placeholder="Search Project..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ width: "100%", padding: "8px",
                    boxSizing:"border-box" }}
                />

                {/* Project list */}
                <ProjectList 
                    projects={filteredProjects}
                    onDelete={deleteProject} 
                />
            </div>
        </>
    );
}

export default App;
