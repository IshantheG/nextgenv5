"use client"

import "../styles/hero.css";

import Navbar from "../navbar/page"

export default function Hero() {

   
    return (
        
        <div className="hero-page">
        <Navbar />
        <div style={{ backgroundColor: '#000000' }}>
          <div className="header-container">
            <h1 className="main-header">NextGen Learning</h1>
            <div>
              <div className="subheading-container">
                <h2 className="subheading">
                  Training the <span className="next">next</span> generation.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}


