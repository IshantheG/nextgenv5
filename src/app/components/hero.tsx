"use client"

import "../styles/hero.css";
import React, { useState } from 'react'

export default function Hero() {

    const [blurred, setblurred] = useState(false)

    const handleClick = () => {
        setblurred(prevState => !prevState)
    }
        




    return (
        <div className={`hero-page ${blurred ? 'blur' : ''}`}>
        <button className="button-21" role="button" onClick={handleClick}>
          More
        </button>

            <div className="navbar">
                <ul>
                    <li>About</li>
                    <li>Team</li>
                    <li>Contact</li>
                    <li>Register</li>
                </ul>

            </div>

            <div className="header-container">
                <h1 className="main-header">NextGen Learning</h1>
                <div>
                    <div className="subheading-container">
                        <h2 className="subheading">Training the <span className="next">next</span> generation.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}