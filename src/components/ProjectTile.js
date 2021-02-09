import React from 'react';
// import ExampleAppImage from '../images/ExampleAppImage';
import ExampleAppImage from './ExampleAppImage.png';


const ProjectTile = (props) => {

    //have project render based on a props object
    //project object format:
    let projectObj = {
        title: props.obj.title,
        desc: props.obj.desc,
        image: props.obj.image,
        tags: props.obj.tags,
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

            </div>
        )
    };
    
    export default ProjectTile;