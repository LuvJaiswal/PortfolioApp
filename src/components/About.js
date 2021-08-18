import React from 'react';
import api from '../assets/images/icons/front.png'
import Skillcard from './Skillcard';

const skills = [
    {
        icon: api,
        title: "Frontend",
        about: "work of Frontend",
    },
    {
        icon: api,
        title: "Backend",
        about: "work of Backend",
    }
]

const About = () => {
    return (
        <div className="about">
            <h6 className="about_intro">This is about page</h6>
            <div className="container about_container">
                <h6 className="about_heading"> What I offer </h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />
                        )
                    }
                </div>
            </div>

        </div>
    );
}
export default About;