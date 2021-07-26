import React from 'react'
import ViewMyResume from '../viewmyresume/ViewMyResume';
import Nav from '../nav/Nav';
import './Hero.css'

function Hero() {
    return (
        <div className="Hero">
            <Nav />
            <div className="Container">
                <p className="title animate__animated animate__fadeInDown">Hi, my name's <b>Ismail</b>.<br />I am a <b>Software Developer</b></p>
                <p className="subtitle animate__animated animate__fadeInDown">The thing that I love about programming is the ability it gives me <br />to bring my ideas into reality.</p>
                <ViewMyResume />
            </div>
        </div>
    )
}

export default Hero
