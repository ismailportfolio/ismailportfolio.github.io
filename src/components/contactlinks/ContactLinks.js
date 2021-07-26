import React from 'react'
import './ContactLinks.css'
import gmailLogo from '../../assets/gmail.svg';
import linkedinLogo from '../../assets/linkedin.svg';
import githubLogo from '../../assets/github.svg';

function ContactLinks() {
    return (
        <div className="ContactLinks animate__animated animate__lightSpeedInRight">
            <a href="mailto:ismailshaikh31097@gmail.com" target="_blank">
                <img src={gmailLogo} alt="gmail" />
            </a>
            <a href="https://www.linkedin.com/in/ismail-creatvt" target="_blank">
                <img src={linkedinLogo} alt="linkedin" />
            </a>
            <a href="https://www.github.com/ismail-creatvt" target="_blank">
                <img src={githubLogo} alt="github" />
            </a>
        </div>
    )
}

export default ContactLinks
