import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';
const Projects = () => {
    const [projects, setProjects] = useState(data_projects)
    return (

        <div className="container projects">
            <div className="projects_navbar">
                <div>Java</div>
                <div>Dart</div>
                <div>React</div>
                <div>Bootstrap</div>
                <div>PHP/Laravel</div>
                <div>dotNet</div>


            </div>

            <div className="row">
                {
                    data_projects.map(project =>
                        <ProjectCard key={project.name}
                            project={project} />)
                }

            </div>
        </div>
    );
};

export default Projects;