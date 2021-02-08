import React from 'react';


const About = (props) => {


        return (
            <div id="contentCont">
            <div className="aboutContent">
                
                <div className="aboutTextCont">
                <div id="picture">Image Here</div>

                    
                        <div id="bioTitle">Bio:</div> 
                        <div id="bioCont">Motivated, hard working individual seeking a role in software development. I have a background in mechanical engineering, but I’ve enjoyed many opportunities to apply programming skills in both past roles and personal projects, which is why I would ultimately like to transition to a software oriented role. I’m a fast learner who</div>
                  

                    
                        <div id="edTitle">Education:</div> 
                        <div id="edCont">
                                <div>University of California, Los Angeles (UCLA)</div>
                                <div>BS Mechanical Engineering</div>
                                <div>Graduated Dec 2018</div>
                        </div>
                                       
                        <div id="skillTitle">Skills:</div> 
                        <div id="skillCont">JavaScript, HTML, CSS, React, Node</div>
                    
                    
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