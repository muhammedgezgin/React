import React from "react";
import email from '../styles/images/mail.svg';
import linkedin from '../styles/images/linkedin.svg';


const Main = () => {

    return (
            <div id="maincontent">
                <h1 id="t-name">Muhammed Gezgin</h1>
                <h3 id="t-job">Frontend Developer</h3>
                <h4 id="t-site">Web site</h4>
                <div id="btn">
                    <button><img src={email} />E-mail</button>
                    <button id="linkedin"><img src={linkedin} />LinkedIn</button>
                </div>
                <div className="content">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="content">
                    <h2>Interest</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
    )
}

export default Main;
