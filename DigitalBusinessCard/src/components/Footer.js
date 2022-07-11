import React from "react";
import instagram from '../styles/images/instagram.svg';
import facebook from '../styles/images/facebook.svg';
import twitter from '../styles/images/twitter.svg';
import github from '../styles/images/github.svg';


const Footer = () => {
    return (
        <div id="footer">
            <img src={instagram} />
            <img src={facebook} />
            <img src={twitter} />
            <img src={github} />
        </div>
    )
};

export default Footer;
