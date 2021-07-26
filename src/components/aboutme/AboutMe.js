import React from 'react'
import Nav from '../nav/Nav'
import './AboutMe.css'
import myImage from '../../assets/aboutme_image.png'

function AboutMe() {
    return (
        <div className="AboutMe">
            <Nav title="About Me" />
            <div className="Content">
                <p className="aboutMeText">
                    My name is Ismail Shaikh. I live in Pune,
                    Maharashtra. I am a thinker. My mind is always
                    buzzing with ideas. I am an Introvert and an
                    excellent team player. Everyone has their perspective
                    and I like to see all of them!<br />
                    <br />
                    I did my Bachelors degree in Computer Science from AKI’s Poona
                    College of Arts, Science and Commerce. After completing graduation,
                    I went on to take a course in Android Development. Since then, I am
                    working as an Android Developer. While working as an Android developer,
                    I explore other technologies as well such as React, Nodejs and Django in my free time.<br />
                    <br />
                    Although I haven’t done any course or taken professional training on it, I am very enthusiastic about UI/UX design, Branding and such. And so, I have learnt how to use tools like Figma, Adobe Photoshop, Adobe Illustrator and Adobe After Effects.
                </p>
                <img src={myImage} className="myImage" />
            </div>
        </div>
    )
}

export default AboutMe
