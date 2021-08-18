import React from 'react';
import front from '../assets/images/icons/front.png'
import back from '../assets/images/icons/back.png'
import api from '../assets/images/icons/restApi.png'
import coder from '../assets/images/icons/coder.jpg'
import event from '../assets/images/icons/eventmanagement.jpg'
import mobile from '../assets/images/icons/mobile.jpg'
import web from '../assets/images/icons/webapp.png'
import download from '../assets/images/icons/download.png'
import Skillcard from './Skillcard';

const skills = [
    {
        icon: front,
        title: "Frontend Development",
        about: "work of Frontend",
    },
    {
        icon: back,
        title: "Backend Development",
        about: "work of Backend",
    },
    {
        icon: api,
        title: "API DEVELOPMENT",
        about: "work of API",
    },
    {
        icon: coder,
        title: "Competitive coder",
        about: "work of Backend",
    },
    {
        icon: event,
        title: "Event Management",
        about: "work of Backend",
    },
    {
        icon: mobile,
        title: "Mobile App Development",
        about: "work of Backend",
    },
    {
        icon: web,
        title: "Web App Development",
        about: "work of Backend",
    },
    {
        icon: download,
        title: "UI/UX Designer",
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