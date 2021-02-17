import React from 'react';
import headshot from './images/headshot.jpeg';
import jsLogo from './images/jsLogo.png';
import htmlLogo from './images/htmlLogo.png';
import cssLogo from './images/cssLogo.png';
import nodeLogo from './images/nodeLogo.png';
import expressLogo from './images/expressLogo.png';
import reactLogo from './images/reactLogo.png';

const About = (props) => {



        return (
            <div id="contentCont">
            
            <div className="aboutContent" >
                
                <div className="aboutTextCont">
                

                    
                        
                        <div id="bioCont">
                        <div id="picture"><img id="headshot" src={headshot} alt="Headshot Photo"></img></div>
                        <div id="bioTitle" className="aboutTitle">Bio:</div> 
                        <div id="bioText">
                        <p>
                            I am a motivated and hard working individual seeking a role in software development. I live in Salt Lake City, Utah and am open to any local or remote development roles. I have a background in mechanical engineering, but I’ve enjoyed many opportunities to apply programming skills in both past roles and personal projects, which is why I would ultimately like to transition to a software oriented role.</p>
                        <p>
                        My background isn't a traditional computer science background, but I am confident that I can succeed in a development role. I have past experience programming and I have been self studying web development in any available spare time. I’ve built a variety of personal projects that can be viewed on below, and am constantly learning new skills so I can make better apps with greater complexity.
                        </p>
                        <p>
                        Please feel free to reach out, my contact info is at the bottom of the page.</p>
                        </div>

                        </div>
                  

                    
                        
                        <div id="edCont">
                        <div id="edTitle" className="aboutTitle">Education:</div> 
                                
                                <div>University of California, Los Angeles (UCLA)</div>
                                <div>BS Mechanical Engineering, Graduated Dec 2018</div>
                                
                        </div>
                                       
                        <div id="skills">
                        <div id="skillTitle" className="aboutTitle">Skills:</div> 
                        <div id="skillCont"><img src={jsLogo}></img><img src={htmlLogo}></img><img src={cssLogo}></img><img src={reactLogo}></img ><img src={nodeLogo}></img><img src={expressLogo}></img></div>
                        </div>
                    
                    
                    {/* <li className="aboutTextItem">Education: 
                        <ul>
                            <li>University of California, Los Angeles (UCLA)</li>
                            <li>BS, Mechanical Engineering</li>
                            <li>Graduated: Dec 2018</li>
                        </ul>
                    </li> */}

                </div>


            </div>
            </div>
        )
    };
    
    export default About;