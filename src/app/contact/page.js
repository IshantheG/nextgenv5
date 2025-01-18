"use client"

import "../styles/Contact.css";

import Navbar from "../navbar/page"


export default function Contact() {
    return (
        <div className="contact-page" style={{backgroundColor: "black", color: "white"}}>
            <Navbar />

         
            <div style={{ backgroundColor: '#000000' }}>
            <div className="header-container">
                <div className="title-container">
                    <h1 className="title">Contact Us</h1>
                </div>
            </div>

           
                <div className="PContact">
                    <h1 className="ProgramEmail">Program Email: </h1>
                </div>

                <div className="PEmail">
                    <h1 className = "Email">nextgenincubatorcanada@gmail.com</h1>
                </div>

                <div className="SContact">
                    <h1 className="Supervisor">Supervisor: Sunita Kak</h1>
                </div>

                <div className="EmailContainer">
                    <h1 className = "Email">sunita.kak@rexdalechc.com</h1>
                </div>
                </div>




            </div>

           
    )
}

