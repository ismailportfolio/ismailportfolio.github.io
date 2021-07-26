import React from 'react';
import './SkillItem.css';

function SkillItem({ icon, title, description, experience }) {

    return (
        <div className="SkillItem">
            <div className="imgContainer">
                <img src={icon} />
            </div>
            <p className="skillTitle">{title}</p>
            <p className="skillDescription">{description}</p>
            <p className="skillExperience">{experience}</p>
        </div>
    )
}

export default SkillItem
