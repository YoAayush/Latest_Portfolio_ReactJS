import React from "react";
import "./About.css"
import { Link } from "react-router-dom";

export default function About(props) {
    return (
        <div className="About-outer">
            <div className="About-inner">
                <h1>About Me</h1>
                <p>
                    Enthusiastic and diligent 2nd Year BCA student with a passion for web developing and coding. Seeking a dynamic career opportunity to apply my programming and developing skills in a challenging and collaborative environment, contributing to innovative solutions and continuous learning while striving for professional excellence.
                </p>
                <p style={{ marginTop: "10px" }}>
                    Apart from this, also experienced in Tally (accounting software)
                </p>
                <div className="btn">
                    <Link to={props.data[0].resume} target="_blank" download={false}>
                        <button>Resume</button>
                    </Link>
                </div>
                <div className="media">
                    Social Media Links :-
                    <ol className="media-list">
                        <Link to="https://www.instagram.com/aayush_chopra_10/" target="_blank"><li><img src={props.data[0].insta_img} alt="instagram" /></li></Link>
                        <Link to="https://www.linkedin.com/in/aayush-chopra-a142b0288/" target="_blank"><li><img src={props.data[0].linkedin_img} alt="linkedin" /></li></Link>
                        <Link to="https://github.com/YoAayush" target="_blank"><li><img src={props.data[0].github} alt="github" /></li></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100016672691061&mibextid=ZbWKwL" target="_blank"><li><img src={props.data[0].facebook} alt="facebook" /></li></Link>
                    </ol>
                </div>
                <div className="profile-img">
                    <img src={props.data[0].image} alt="" className="profile-myimage" />
                </div>
                <div className="skills-icons">
                    My Skills
                    <div className="skills">
                        <div className="icons">
                            <img src="/html.png" alt="" title="html" />
                        </div>
                        <div className="icons">
                            <img src="/css.png" alt="" title="css" />
                        </div>
                        <div className="icons">
                            <img src="/javascript.png" alt="" title="javascript" />
                        </div>
                        <div className="icons">
                            <img src="/react.png" alt="" title="reactJS" />
                        </div>
                        <div className="icons">
                            <img src="/firebase.png" alt="" title="google firebase" />
                        </div>
                        <div className="icons">
                            <img src="/sql.png" alt="" />  
                        </div>
                        <div className="icons">
                            <img src="/python.png" alt="" title="python" />
                        </div>
                        <div className="icons">
                            <img src="/icons8-github-100.png" alt="" title="Github" />
                        </div>
                        <div className="icons">
                            <img src="/icons8-git-128.png" alt="" title="Git" />
                        </div>
                        <div className="icons">
                            <img src="/tally-prime.png" alt="" title="tally-prime" />
                        </div>
                    </div>
                </div>
                <div className="connect-email">
                    <Link to="mailto:chopraaayush2004@gmail.com">
                        <span>Get in Touch <img src="/mail.png" alt="" /></span>
                    </Link>
                </div>
            </div>
            <div id='footer'>
                <p>© 2024 All Rights Reserved | Aayush Chopra</p>
            </div>
        </div>
    )
}