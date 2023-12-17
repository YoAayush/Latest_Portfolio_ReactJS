import React from "react";
import './Intro.css';
import { Link } from "react-router-dom";

export default function Intro(props) {
    // console.log(props.data[0].resume,props.data[0].image)
    return (
        <div className="outer">
            <div className="inner">
                <img src={props.data[0].image} alt="profile-image" className="profile" />
                <div className="inner-about">HELLO THERE, NICE TO MEET YOU, I AM</div>
                <h1>{props.data[0].name}</h1>
                <div className="inner-domain">{props.data[0].recent}</div>
                <div className="inner-about margin">{props.data[0].about}</div>
                <div className="btn">
                    <Link to={props.data[0].resume} target="_blank" download={false}>
                        <button>Resume</button>
                    </Link>
                </div>
            </div>
            <div id='footer'>
                <p>© 2023 All Rights Reserved | Aayush Chopra</p>
            </div>
        </div>
    )
}