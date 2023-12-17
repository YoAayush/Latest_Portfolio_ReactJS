import React from "react";
import "./Projects.css"
import { Link } from "react-router-dom";

export default function Projects() {

    return (
        <div className="projects-outer">
            <div className="projects-inner">
                <h3>My Projects</h3>
                <div className="flex-system">
                    <div className="project-card">
                        <img src="/microsoft.png" alt="microsoft_home_landing_page" />
                        <h3>Microsoft Home Landing Page</h3>
                        <p>Made a Microsoft website home landing page clone with pure HTML, CSS and JS with fully responsiveness.</p>
                        <div className="links">
                            <Link to="https://github.com/YoAayush/microsoft-home-landing-page-clone" target="_blank"><li><img src="/github-logo.png" alt="github" /></li></Link>
                            <Link to="https://yoaayush.github.io/microsoft-home-landing-page-clone/" target="_blank"><li><button>Live Preview</button></li></Link>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src="/chopra-screen-arts.jpg" alt="microsoft_home_landing_page" />
                        <h3>Chopra Screen Arts Website</h3>
                        <p>Made a Professional website of business named as CHOPRA SCREEN ARTS with pure HTML, CSS and JS (fully responsive wiht contact page)</p>
                        <div className="links">
                            <Link to="https://github.com/YoAayush/Chopra-Screen-Arts-Website" target="_blank"><li><img src="/github-logo.png" alt="github" /></li></Link>
                            <Link to="https://yoaayush.github.io/Chopra-Screen-Arts-Website/" target="_blank"><li><button>Live Preview</button></li></Link>
                        </div>
                    </div>
                </div>
                <div className="flex-system gap">
                    <div className="project-card">
                        <img src="/github profilie finder.png" alt="microsoft_home_landing_page" />
                        <h3>Github Profile Finder</h3>
                        <p>Made a github profile finder where you can easily find any profile with their repositories with pure HTML, CSS and JS</p>
                        <div className="links">
                            <Link to="https://github.com/YoAayush/github-profile-finder.github.io" target="_blank"><li><img src="/github-logo.png" alt="github" /></li></Link>
                            <Link to="https://yoaayush.github.io/github-profile-finder.github.io/" target="_blank"><li><button>Live Preview</button></li></Link>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src="/music-tech.png" alt="microsoft_home_landing_page" />
                        <h3>Music Tech Music Player</h3>
                        <p>Made a music player with the use of js library ReactJS, you can listen the listed songs also their is a feature of timeline of songs.</p>
                        <div className="links">
                            <Link to="https://github.com/YoAayush/Music.Tech.github.io" target="_blank"><li><img src="/github-logo.png" alt="github" /></li></Link>
                            <Link to="https://music-tech.netlify.app/" target="_blank"><li><button>Live Preview</button></li></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer'>
                <p>© 2023 All Rights Reserved | Aayush Chopra</p>
            </div>
        </div>
    )
}