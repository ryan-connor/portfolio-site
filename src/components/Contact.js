import React from 'react';


const Contact = (props) => {


        return (
            <div className="contactCont">
                <div id="contactTitle">Feel Free to Reach out!</div>
                <div id="contactInfo">
                    <div className="contactItem">
                    <div className="icon">Img</div>
                    <div className="contactLink">Email Address@gmail.com</div>
                    </div>

                    <div className="contactItem">
                    <div className="icon">Img</div>
                    <div className="contactLink">Github Link github.com</div>
                    </div>

                    <div className="contactItem">
                    <div className="icon">Img</div>
                    <div className="contactLink">Linkedin linkedin.com/234234234</div>
                    </div>
                </div>
            </div>
        )
    };
    
    export default Contact;