import { useState} from "react"
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import SearchBar from "./components/SearchBar";

function App() {
    const [projects, setProjects] = useState([
        { id: 1, title: "portfolio Website" , description: "Personal portfolio"},
        { id: 2, title: "Todo App", description: "Task management app"}
    ]);

    const [search, setSearch] = useState("");


    function addProject(newProject) {
        setProjects([...projects, newProject]);
    }
  const filteredProjects = projects.filter(project =>
  project.title.toLowerCase().includes(search.toLowerCase())
);

    return (
        <>
        <Header /> 
        <SearchBar search={search} setSearch={setSearch} />
        <ProjectForm addProject={addProject} />
        <ProjectList projects={filteredProjects} />
        </>
    );
}


export default App
