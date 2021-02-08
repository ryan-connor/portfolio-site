import React from 'react';


const ProjectTile = (props) => {

    //have project render based on a props object
    //project object format:
    let projectObj = {
        image: props.image,
        title: props.title,
        desc: props.desc,
        tags: props.tags,
    };


        return (
            <div className="projectCont">
                <div className="projectImage" >Image Here</div>
                <div className="projectText">
                    <div className="projectTitle">Super Fancy React App</div>
                    <div className="projectDesc">Message board app made with a React frontend, an Express REST API Backend, and Mongo Database. Users can create an account, and then sign in to post messages. User auth is done with JWT and Passport, password hashing is done with bcrypt. Depending on user credentials they can view, post messages, and if they are admins delete messages.</div>
                </div>
                <div className="projectTags">
                    <div className="projectTag">React</div>
                    <div className="projectTag">HTML</div>
                    <div className="projectTag">CSS</div>
                </div>


                

            </div>
        )
    };
    
    export default ProjectTile;