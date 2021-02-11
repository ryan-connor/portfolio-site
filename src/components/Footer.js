import React from 'react';
import githubIcon  from './images/githubIcon.png';
// import gmailIcon from './images/gmailIcon.png';
// import linkedinIcon from './images/linkedinIcon.png';


const Footer = (props) => {


        return (
            <div id="footer">
                <div>Created by Connor Ryan</div>
                <div className="footerIcon"><img className="footerIconImage" src={githubIcon}  alt="Github logo"></img></div>                
            </div>
        )
    };
    
    export default Footer;