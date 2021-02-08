import React from 'react';
import ProjectTile from './ProjectTile';


const Projects = (props) => {

    //render 6? projects based on array of project objects that can be passed in as
    let savedProjects = [];

    //pass indexes to render as props or state changes, so then will rerender when state changes and change displayed tiles
    let start= 0;
    let end= 6;

    //loop through here and put all into array, then just render the array of components
    let tiles = savedProjects.map( tile=> {
        return <ProjectTile props={tile} />
    });

    let tilesToRender = tiles.slice(start,end);

        return (
            <div className="header">
                <div id="projectsTitle" >Projects</div>

                <div className="projectsCont">
                    {tilesToRender}                  
                </div>

            </div>
        )
    };
    
    export default Projects;