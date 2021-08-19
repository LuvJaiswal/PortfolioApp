import React from "react";
import check from '../assets/images/icons/download.png'

const languages = [
    {

        icon: 'check',
        name: 'Python',
        level: ''
    },
    {

        icon: 'check',
        name: 'Python',
        level: ''
    },
    {

        icon: 'check',
        name: 'Python',
        level: ''
    },
    {

        icon: 'check',
        name: 'Python',
        level: ''
    }
]

const tools = [
    {

        icon: 'check',
        name: 'android studio',
        level: ''
    },
    {

        icon: 'check',
        name: 'android studio',
        level: ''
    },
    {

        icon: 'check',
        name: 'android studio',
        level: ''
    }
]

const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                        Education
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Bachelor's in Computer Science
                        </h5>
                        <p className="resume-card_name">
                            Academic of Technology
                        </p>
                        <p className="resume-card_details">
                            This is s..,.....
                        </p>

                    </div>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                        Experience
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Full Stack Mobile and Web Developer
                        </h5>
                        <p className="resume-card_name">
                            have worked on .......
                        </p>
                        <p className="resume-card_details">
                            This is s..,.....
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language_body">
                        {
                            languages.map(Laguage =>
                                <Bar Language={Language} />
                            )}
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading">
                        Tools and Software
                    </h5>
                    <div className="resume-language_body">
                        {

                            tools.map(tool =>
                                <Bar tool={tool} />)
                        }
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Resume;