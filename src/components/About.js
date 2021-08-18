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
        about: "I can build a beautiful frontend using html,bootstrap,css,laravel, c# & react ",
    },
    {
        icon: back,
        title: "Backend Development",
        about: "I can handle database,server, api, firebase as well as SQlite for the backend development",
    },
    {
        icon: api,
        title: "API DEVELOPMENT",
        about: "I can develop robust Api using PHP & LARAVEL",
    },
    {
        icon: coder,
        title: "Competitive coder",
        about: "I am a daily coder who spends most of time solving problems and coding",
    },
    {
        icon: event,
        title: "Event Management",
        about: "I can be an excellent event organizer, I have an experience of different event management skills"
    },
    {
        icon: mobile,
        title: "Mobile App Development",
        about: "I can build mobile app for both Android(using java) and IOS(dart). I have experience working in both android studio and flutter ",
    },
    {
        icon: web,
        title: "Web App Development",
        about: "I am compatible to develop websites using Bootstrap, Laravel & React js",
    },
    {
        icon: download,
        title: "UI/UX Designer",
        about: "minimalistic user interface designer",
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