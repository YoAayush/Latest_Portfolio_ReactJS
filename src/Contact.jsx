import React, { useRef } from "react";
import './Contact.css'
import { Link } from "react-router-dom";
import emailjs, { sendForm } from 'emailjs-com';

export default function Contact(props) {

    const form = useRef();

    const submit = (event) => {
        event.preventDefault();
        if (document.getElementById("name").value === '' || document.getElementById("phn").value === '' || document.getElementById("email").value === '' || document.getElementById("msg").value === '') {
            alert("please all the fields.");
            return;
        }
        emailjs.sendForm('service_3eev447', 'template_vr4i70g', form.current, 'dcnwF_YdnAdBSU6wr')
            .then((result) => {
                alert("message sent");
                window.location.reload();
            }, (error) => {
                alert(error.text);
            });
    }

    return (
        <div className="contact-outer">
            <div className="contact-inner">
                <form ref={form} onSubmit={submit}>
                    <div className="head">
                        <h1>Contact Me</h1>
                    </div>
                    <div style={{ marginTop: "10px", color: "#E24E1B" }}>
                        <p>In order to dicuss the project in more detail, please contact me by phone or through social networks.</p>
                    </div>
                    <div className="card">
                        <div className="card-inputs">
                            <div className="card-inp">
                                <h3>Full Name :-</h3>
                                <input type="text" name="user_Name" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="card-inp">
                                <h3>Phone Number :-</h3>
                                <input type="text" name="user_Phone_Number" id="phn" placeholder="Enter your Phone Number" />
                            </div>
                            <div className="card-inp">
                                <h3>Email Address :-</h3>
                                <input type="email" name="user_Email" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="card-inp">
                                <h3>Your Message :-</h3>
                                <textarea name="Message" id="msg" placeholder="Type your message"></textarea>
                            </div>
                        </div>
                        <div className="info">
                            <div className="profile-img">
                                <img src="/image.png" alt="" className="profile-myimage profile-size" />
                            </div>
                            <div className="some-content">
                                <p style={{ fontSize: "30px" }}>
                                    Aayush Chopra
                                </p>
                                <p style={{ fontSize: "20px", marginTop: "10px" }}>
                                    Web Developer
                                </p>
                            </div>
                            <div className="contact-media">
                                <ol className="contact-media-list">
                                    <Link to="https://www.instagram.com/aayush_chopra_10/" target="_blank"><li><img src={props.data[0].insta_img} alt="instagram" /></li></Link>
                                    <Link to="https://www.linkedin.com/in/aayush-chopra-a142b0288/" target="_blank"><li><img src={props.data[0].linkedin_img} alt="linkedin" /></li></Link>
                                    <Link to="https://github.com/YoAayush" target="_blank"><li><img src={props.data[0].github} alt="github" /></li></Link>
                                    <Link to="https://www.facebook.com/profile.php?id=100016672691061&mibextid=ZbWKwL" target="_blank"><li><img src={props.data[0].facebook} alt="facebook" /></li></Link>
                                </ol>
                            </div>
                            <div className="div-logo">
                                <img src="/email-logo.png" alt="" />
                                <Link to="mailto:chopraaayush2004@gmail.com">
                                    <p>
                                        chopraaayush2004@gmail.com
                                    </p>
                                </Link>
                            </div>
                            <div className="div-logo">
                                <img src="/phone-logo.png" alt="" />
                                <p>
                                    +91 8595807464
                                </p>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Send" />
                </form>
            </div>
            <div id='footer'>
                <p>© 2023 All Rights Reserved | Aayush Chopra</p>
            </div>
        </div>
    )
}

// const [formdata, setformdata] = useState({
//     user_Name: "",
//     user_Phone_Number: "",
//     user_Email: "",
//     Message: ""
// })

// const ChangeHandler = (e) => {
//     e.preventDefault();
//     let name = e.target.name;
//     let value = e.target.value;
//     setformdata({
//         ...formdata,
//         [name]: value
//     })
// }

// if (window.Email) {
//     window.Email.send({
//         // Host: import.meta.env.VITE_host,
//         // Username: import.meta.env.VITE_username,
//         // Password: import.meta.env.VITE_password,
//         SecureToken: "f0a36b53-969f-4ebf-aaae-1edf149ecd13",
//         To: import.meta.env.VITE_username,
//         From: import.meta.env.VITE_username,
//         Subject: "New Contact form enquiry",
//         Body: JSON.stringify(formdata)
//     }).then(
//         alert("your message is sent."),
//         location.reload()
//     );
// }