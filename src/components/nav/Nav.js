import React from 'react'
import ContactLinks from '../contactlinks/ContactLinks'
import './Nav.css';

function Nav({ title }) {
    return (
        <div className="Nav">
            <p className="heading">{title}</p>
            <ContactLinks />
        </div>
    )
}

export default Nav
