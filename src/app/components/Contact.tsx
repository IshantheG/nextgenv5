"use client"

import "../styles/Contact.css";
import React, { useState } from 'react'


export default function Contact() {
    return (
        <div className="Session-page">

            <div className="navbar">
                <ul>
                    <li>About</li>
                    <li>Team</li>
                    <li>Contact</li>
                    <li>Get Involved</li>
                    <li>Iteration 1.0 Summary</li>
                </ul>

            </div>

            <div className="header-container">
                <div className="title-container">
                    <h1 className="title">Contact Us</h1>
                </div>
            </div>

           
                <div className="PContact">
                    <h1 className="ProgramEmail">Program Email: </h1>
                </div>

                <div className="PEmail">
                    <h1 className = "Email">nextgenlearning@gmail.com</h1>
                </div>

                <div className="SContact">
                    <h1 className="Supervisor">Supervisor: Sunita Kak</h1>
                </div>

                <div className="EmailContainer">
                    <h1 className = "Email">sunitakak@rexdalechc.com</h1>
                </div>




            </div>

           
    )
}