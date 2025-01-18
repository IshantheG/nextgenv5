"use client";

import "../styles/about.css";
import Navbar from "../navbar/page";

export default function About() {
    return (
        <div className="about-page" style={{ backgroundColor: "black", color: "white" }}>
            <Navbar />

            <div className="header-container">
                <div className="title-container">
                    <h1 className="title">About Us</h1>
                </div>
                <div className="sh-container">
                    <h2 className="subheading">Discover the mission behind the movement.</h2>
                </div>
            </div>

            <div className="p-1-container">
                <p className="p-1">
                    A virtual innovation program, NextGen is aimed towards high-school students with entrepreneurial mindsets and characteristics. The goal is to provide enrichment opportunities around STEM and entrepreneurship, specifically targeting students who are proven leaders and passionate about learning. We want to activate the potential these youth hold, and use it to change their trajectory. A key focus is also made on empowering youth from diverse ethnicities, genders, and abilities.
                </p>
            </div>

            <div className="break"></div>

            <div className="stats">
                <div className="n-1-container">
                    <h1 className="n-1">45%</h1>
                </div>

                <div className="firstStat">
                    <h3 className="fSsub">of Gen Z want to start their own business</h3>
                </div>

                <div className="yet">
                    <h3 className="t-1">yet only</h3>
                </div>

                <div className="andOut">
                    <h3>and out of them</h3>
                </div>

                <div className="sSub-container">
                    <h3 className="sSsub"></h3>
                </div>

                <div className="n-2-container">
                    <h1 className="n-2">1.7%</h1>
                    <h3 className="t-2">of Canadian entrepreneurs are under the age of 30</h3>
                </div>

                <div className="n-3-container">
                    <h1 className="n-3">14%</h1>
                    <h3 className="t-3">are minorities</h3>
                </div>

                <div className="n-4-container">
                    <h1 className="n-4">15%</h1>
                    <h3 className="t-4">are women</h3>
                </div>
            </div>

            <div className="sParagraph">
                <p>
                    Entrepreneurship is fundamental to a country&apos;s economic growth and requires a strong foundation of people behind it. This means that without young and diverse drivers of progress, Canada is likely to fall behind in the future. This is why it is imperative that an engine of progress is developed to launch the youth of today into the world of tomorrow.
                </p>
            </div>

            <div>
                <h2 className="OverviewSub">Program Overview</h2>
            </div>
            <div className="p3Container">
                <div className="p3">
                    <p>
                        This program aims to empower marginalized yet motivated and enthusiastic teens by providing access to high-cost incubator opportunities at little to no cost. The participants will develop crucial STEM and entrepreneurial skills, preparing them to independently innovate and launch their own businesses. By targeting visible minorities and diverse gender and geographic backgrounds, we hope to foster a more inclusive tech and entrepreneurship community.
                    </p>
                </div>
            </div>

            <div>
                <h2 className="MissionStatement">Mission Statement</h2>
            </div>
            <div className="p4Container">
                <div className="p4">
                    <p>
                        Our mission is to address the lack of diversity in Canadian entrepreneurship by inspiring marginalized youth to enter the tech and entrepreneurial sectors. The progra&apos;s positive impact will be amplified by involving diverse mentors who serve as exemplary role models, demonstrating that success can come from any background. The goal is to spark the entrepreneurial spirit in underrepresented groups, empowering them to overcome economic barriers and improve their futures.
                    </p>
                </div>
            </div>
        </div>
    );
}


