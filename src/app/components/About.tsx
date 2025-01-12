"use client"

import "../styles/about.css";
import React, { useState } from 'react'


export default function About() {
    return (
        <div className="about-page">

            <div className="navbar">
                <ul>
                    <li>About</li>
                    <li>Team</li>
                    <li>Contact</li>
                    <li>Register</li>
                </ul>

            </div>

            <div className="header-container">

                <div className="title-container">
                    <h1 className="title">About Us</h1>
                </div>
                <div className="sh-container">
                    <h2 className="subheading">Discover the mission behind the movement.</h2>
                </div>

                <div className="p-1-container">
                    <p
                        className="p-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>

                <div className="break"></div>

                

                <div className="stats">


                    <div className="n-1-container">
                        <h1 className="n-1">45%</h1>
                        <h3 className="t-1">blah blah blah</h3>
                    </div>


                    {/* <div className="n-2-container">
                        <h3 className="t-2">but only</h3>
                        <h1 className="n-2">1.7%</h1>
                        <h3 className="tt-2">blah blah</h3>
                    </div>

                    <div className="n-3-container">
                        <h1 className="n-3">14%</h1>
                        <h3 className="t-3">are <b>minorities</b></h3>
                    </div>

                    <div className="n-3-container">
                        <h1 className="n-4">15%</h1>
                        <h3 className="t-4">are <b>women</b></h3>
                    </div> */}

                </div>



            </div>
        </div>
    )
}