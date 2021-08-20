import React from "react";
import check from '../assets/images/icons/back.png'
import Bar from './Bar'

const languages = [
    {

        icon: check,
        name: 'PHP',
        level: `80`
    },
    {

        icon: 'check',
        name: 'Java',
        level: '90'
    },
    {

        icon: 'check',
        name: 'Reactjs',
        level: '70'
    },
    {

        icon: 'check',
        name: 'Laravel',
        level: '60'
    }
]

const tools = [
    {
        icon: 'check',
        name: 'android studio',
        level: '69'
    },
    {

        icon: 'check',
        name: 'android studio',
        level: '70'
    },
    {

        icon: 'check',
        name: 'android studio',
        level: '80'
    },
    {

        icon: 'check',
        name: 'random studio',
        level: '80'
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
                        Languages and Framework
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            languages.map(Language =>
                                <Bar value={Language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading">
                        Tools and Software
                    </h5>
                    <div className="resume-language_body mt-3">
                        {

                            tools.map(tool =>
                                <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Resume;