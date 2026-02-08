import { useState } from "react";

function ProjectForm({ addProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        addProject({
            id: Date.now(),
            title,
            description
        });
        setTitle("");
        setDescription("");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "20px auto" }}> 

            <div
                style={{
                    padding: "20px",
                    border: "1px solid #000",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    boxSizing: "border-box",
                    alignItems: "center",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Add Project</h2>

                
                <div style={{ width: "80%", margin: "0 auto" }}>
                    <p style={{ textAlign: "center", marginBottom: "5px" }}>Title</p>
                    <input
                        type="text"
                        placeholder=""
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "8px",
                            boxSizing: "border-box",
                            textAlign: "center", 
                        }}
                        required
                    />
                </div>

                
                <div style={{ width: "80%", margin: "0 auto" }}>
                    <p style={{ textAlign: "center", marginBottom: "5px" }}>Description</p>
                    <textarea
                        placeholder=""
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        style={{
                            width: "100%",
                            padding: "8px",
                            boxSizing: "border-box",
                            textAlign: "center",
                        }}
                        required
                    />
                </div>

                
                <button
                    type="button"
                    onClick={handleSubmit}
                    style={{ width: "80%", padding: "10px", cursor: "pointer" }}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default ProjectForm;
