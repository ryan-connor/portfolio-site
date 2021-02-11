import React from 'react';
import githubIcon from './images/githubIcon.png';


const ProjectTile = (props) => {

    //have project render based on a props object
    //project object format:
    let projectObj = {
        title: props.obj.title,
        desc: props.obj.desc,
        image: props.obj.image,
        tags: props.obj.tags,
        gitLink: props.obj.gitLink,
    };


        return (
            <div className="projectCont">
                <div className="projectImageCont" ><img className="projectImage" src= {projectObj.image} alt={projectObj.title}/> </div>
                <div className="projectText">
                    <div className="projectTitle">{projectObj.title}</div>
                    <div className="projectDesc">{projectObj.desc}</div>
                </div>
                <div className="projectTags">
                    {projectObj.tags.map(item=> {
                        return <div className="projectTag">{item}</div>
                    })}
                    
                </div>        
                {/* <a className="tileGitLink"><img src={githubIcon}></img></a>        */}
                

            </div>
        )
    };
    
    export default ProjectTile;