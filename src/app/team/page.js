"use client"

import "../styles/team.css";

import Navbar from "../navbar/page"

export default function Team() {
    return (
        <div>
            <Navbar />

            <div className="title-container">
                    <h1 className="title">Team</h1>
                </div>
                
            <div className="Picture"><img src="/HeadshotCropped.jpg" alt="Chart" className="Pic"></img></div>
            <div className="JeevanPic"><img src="/Jeevan.png" alt="Chart" className="Jeevan"></img></div>
            <div className="namecontainer">
                <p className="Name">
                    Ishan Gehlaut                
                </p>
            </div>

            <div className="jeevancontainer">
                <p className="jeevan">
                    Jeevan Sanchez               
                </p>
            </div>

            <div className="p-1-container">
                <p className="p-1">
                    As part of the NextGen initiative, we strive to organize a strong and compelling program. For Iteration 1.0, our responsibilites included publicizing the program through our networks, contacting mentors, planning the project curriculum, designing captivating lessons and interactive activities, and managing the participant experience. We gained gained valuable experiences in project management and leadership, and our resounding achievements have inspired us to continue its mission in the future.
                </p>

            </div>
        </div>


    )
}
