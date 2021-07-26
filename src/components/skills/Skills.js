import React from 'react'
import Nav from '../nav/Nav';
import './Skills.css';
import androidHeader from '../../assets/android_development_header_image.svg';
import reactJsHeader from '../../assets/react_js_header_image.svg';
import nodeJsHeader from '../../assets/node_js_header_image.svg';
import uiDesignHeader from '../../assets/ui_design_header_image.svg';
import graphicsDesignHeader from '../../assets/graphics_design_header_image.svg';
import SkillItem from '../skillitem/SkillItem';

function Skills() {
    const data = [
        {
            icon: androidHeader,
            title: "Android Development",
            description: "Developing Android app using Modern Android Development  Ecosystem like Kotlin, Material Design, Jetpack Components",
            experience: "3 yrs Experience"
        },
        {
            icon: reactJsHeader,
            title: "React JS",
            description: "Developing Single page Web applications using React, Redux, Material UI.",
            experience: "1 yr Experience"
        },
        {
            icon: nodeJsHeader,
            title: "Node.js",
            description: "Developing Rest APIs using Node.js, Express.js, Mongo DB, and Mysql.",
            experience: "1 yr Experience"
        },
        {
            icon: uiDesignHeader,
            title: "UI Design",
            description: "Designing High quality mockups for Mobile apps, Desktop apps, and Websites using Figma and Adobe XD.",
            experience: "2 yrs Experience"
        },
        {
            icon: graphicsDesignHeader,
            title: "Graphics Design",
            description: "Designing High quality graphics like Logos, Posters, Social media ads, Infographics, etc using Adobe Photoshop and Adobe Illustrator.",
            experience: "2 yrs Experience"
        }
    ]
    return (
        <div className="Skills">
            <Nav title="Skills" />
            <div className="SkillsContainer">
                {
                    data.map(item =>
                        <SkillItem
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            experience={item.experience} />
                    )
                }
            </div>
        </div>
    )
}

export default Skills
