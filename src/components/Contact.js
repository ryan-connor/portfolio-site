import React from 'react';
import githubIcon  from './images/githubIcon.png';
import gmailIcon from './images/gmailIcon.png';
import linkedinIcon from './images/linkedinIcon.png';


const Contact = (props) => {


        return (
            <div className="contactCont" id="contactSection">
            
                <div id="contactTitle">Please Feel Free to Reach out</div>
                <div id="contactInfo">
                    <div className="contactItem">
                    <div className="icon"><img className="iconImage" src={gmailIcon}  alt="Email logo"/></div>
                    <div className="contactLink">myAddress@gmail.com</div>
                    </div>

                    <div className="contactItem">
                    <div className="icon"><img className="iconImage" src={githubIcon}  alt="Github logo"/></div>
                    <div className="contactLink">me/url/github.com</div>
                    </div>

                    <div className="contactItem">
                    <div className="icon"><img className="iconImage" src={linkedinIcon}  alt="Linkedin logo"/></div>
                    <div className="contactLink">linkedin.com/234234234</div>
                    </div>
                </div>
                
            </div>
        )
    };
    
    export default Contact;