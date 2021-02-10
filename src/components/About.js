import React from 'react';
import headshot from './headshot.jpeg';
import jsLogo from './jsLogo.png';
import htmlLogo from './htmlLogo.png';
import cssLogo from './cssLogo.png';
import nodeLogo from './nodeLogo.png';
import expressLogo from './expressLogo.png';
import reactLogo from './reactLogo.png';

const About = (props) => {



        return (
            <div id="contentCont">
            
            <div className="aboutContent" >
                
                <div className="aboutTextCont">
                <div id="picture"><img id="headshot" src={headshot} alt="Headshot Photo"></img></div>

                    
                        <div id="bioTitle">Bio:</div> 
                        <div id="bioCont"><p>
                            I am a motivated and hard working individual seeking a role in software development. I live in Salt Lake City, Utah and am open to any local or remote development roles. I have a background in mechanical engineering, but I’ve enjoyed many opportunities to apply programming skills in both past roles and personal projects, which is why I would ultimately like to transition to a software oriented role.</p>
                        <p>
                        My background isn't a traditional computer science background, but I am confident that I can succeed in a development role. I have past experience programming and I have been self studying web development in any available spare time. I’ve built a variety of personal projects that can be viewed on below, and am constantly learning new skills so I can make better apps with greater complexity.
                        </p>
                        <p>
                        Please feel free to reach out, my contact info is at the bottom of the page.</p>

                        </div>
                  

                    
                        <div id="edTitle">Education:</div> 
                        <div id="edCont">
                                
                                <div>University of California, Los Angeles (UCLA)</div>
                                <div>BS Mechanical Engineering</div>
                                <div>Graduated Dec 2018</div>
                        </div>
                                       
                        <div id="skillTitle">Skills:</div> 
                        <div id="skillCont"><img src={jsLogo}></img><img src={htmlLogo}></img><img src={cssLogo}></img><img src={reactLogo}></img ><img src={nodeLogo}></img><img src={expressLogo}></img></div>
                    
                    
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