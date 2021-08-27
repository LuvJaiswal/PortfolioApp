import github from '../assets/images/icons/coder.jpg'
const ProjectCard = ({ project: { name, image, deployed_url, github_url } }) => (
    <div className="projectCard col-m-6 col-lg-4">
        <figure className="projectCard_wrapper">
            <a href={deployed_url} target="_blank">
                <img src={image} alt={name} className="projectCard_image" />
            </a>

            <div className="projectCard_title">
                <a href={github_url} target="_blank">
                    <img src={github} alt="github link" className="projectCard_icon" />
                </a>
                {name}
            </div>
        </figure>

    </div>
);
export default ProjectCard;
