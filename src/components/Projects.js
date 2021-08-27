import data_projects from './data/projects_data'
import ProjectCard from './Projectcard';
const Projects = () => {
    return (
        <div>
            <div className="container projects">
                {
                    data_projects.map(project =>
                        <ProjectCard key={project.name}
                            project={project} />
                    )
                }
            </div>
        </div>
    );
};

export default Projects;