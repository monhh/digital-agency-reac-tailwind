import { useEffect, useState } from "react";
import { Project } from "./Project";
import { IProject } from "../types/project";

export function Projects () {

    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/projects")
        .then(response => response.json())
        /* .then(data => console.log(data)) */
        .then((data) => setProjects(data))
    }, [])

    return (
        <section className="projects">
				<h2>Check out some of our awesome projects with creative ideas and great design. </h2>
				<div className="container projects-container">

                    {projects.map((project: IProject) => (
                        <Project key={project.id} {...project} />
                    ))}        

				</div>
			</section>
    )
}