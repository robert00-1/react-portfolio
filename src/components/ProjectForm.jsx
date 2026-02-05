import { useState } from "react";

function ProjectForm({ addProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        addProject({
            id: Date.now(),
            title,
            description
        });
        setTitle("")
        setDescription("");

}

return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="project title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        />
       <button type="submit">Add Project</button>
    </form>
);
}

export default ProjectForm;