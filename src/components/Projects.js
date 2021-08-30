import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';
const Projects = () => {
    const [projects, setProjects] = useState(data_projects)

    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
    }
    return (

        <div className="container projects">
            <div className="projects_navbar">
                <div onClick={() => setProjects(data_projects)}>All</div>
                <div onClick={() => handleFilterCategory('Firebase')}>Firebase</div>
                <div onClick={() => handleFilterCategory('Dart')}>Dart</div>
                <div onClick={() => handleFilterCategory('React')}>React</div>
                <div onClick={() => handleFilterCategory('Bootstrap')}>Bootstrap</div>
                <div onClick={() => handleFilterCategory('PHP')}>PHP/Laravel</div>
                <div onClick={() => handleFilterCategory('dotNet')}>dotNet</div>


            </div>

            <div className="row">
                {
                    projects.map(project =>
                        <ProjectCard key={project.name}
                            project={project} />)
                }

            </div>
        </div>
    );
};

export default Projects;