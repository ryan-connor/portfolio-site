import React from 'react';
import ProjectTile from './ProjectTile';
import ExampleAppImage from './ExampleAppImage.png';

//might need to import images in


const Projects = (props) => {

    //render 6? projects based on array of project objects that can be passed in as, test number to render on screen
    let savedProjects = [
        {
            title: 'Inventory App',
            desc: 'Simple MVC app that displays inventory information from a database and populates EJS templates for various routes.',
            image: ExampleAppImage,
            tags: ['Node','Express','MongoDB','EJS'],
        },
        {
            title: 'To Do List App',
            desc: 'To Do list app that allows users to create tasks with descriptions/due dates, group them under multiple task projects and update/delete them.',
            image: ExampleAppImage,
            tags: ['JavaScript','HTML','CSS'],
        },
        {
            title: 'Mock Shopping Cart',
            desc: 'Mock shopping website using React Router with various page routes and items that can be added to a shopping cart which then displays a page with all items/total cost',
            image: ExampleAppImage,
            tags: ['React','HTML','CSS'],
        },
        {
            title: 'Weather App',
            desc: 'Displays weather conditions based on user search criteria using openweather API.',
            image: ExampleAppImage,
            tags: ['JavaScript','HTML','CSS'],
        },
        {
            title: 'Tile Memory Game',
            desc: 'Tile memory game that displays randomly mixed tiles that change position every time a user clicks and counts a high score.',
            image: ExampleAppImage,
            tags: ['React','HTML','CSS'],
        },
        {
            title: 'Tic Tac Toe',
            desc: 'Tic-Tac-Toe game that allows 2 players to enter their names and then play tic-tac-toe against each other',
            image: ExampleAppImage,
            tags: ['JavaScript','HTML','CSS'],
        },
        {
            title: 'Calculator',
            desc: 'Simple calculator with all basic functionality (add,subtract,multiply,divide), decimals, and all clear buttons',
            image: ExampleAppImage,
            tags: ['JavaScript','HTML','CSS'],
        },
        {
            title: 'Etch-a-Sketch',
            desc: 'Etch-a-Sketch/drawing type game that allows users to input a grid size and then displays a grid of squares that change colors upon hover and get 10% darker on each color change',
            image: ExampleAppImage,
            tags: ['JavaScript','HTML','CSS'],
        },
        {
            title: 'CV Generator',
            desc: 'CV generator app with template sections for each part of a typical resume that can be edited and added to the generated resume, and then updated/deleted',
            image: ExampleAppImage,
            tags: ['JavaScript','HTML','CSS'],
        },
        {
            title: 'Members Only Message Board',
            desc: 'Message board app made with a React frontend, an Express REST API Backend, and Mongo Database. Users can create an account, and then sign in to post messages. User auth is done with JWT and Passport, password hashing is done with bcrypt. Depending on user credentials they can view, post messages, and if they are admins delete messages.',
            image: ExampleAppImage,
            tags: ['React', 'Express', 'MongoDB', 'REST API'],
        },
    ];

    //pass indexes to render as props or state changes, so then will rerender when state changes and change displayed tiles
    let start= 0;
    let end= 6; //note end not included

    //loop through here and put all into array, then just render the array of components
    let tiles = savedProjects.map( tile=> {
        return <ProjectTile obj={tile}/>
    });

    let tilesToRender = tiles.slice(start,end);

        return (
            <div className="projects">
                <div id="projectsTitle" >Projects</div>
                <div className="projectTilesCont">
                    {tilesToRender}              
                </div>
                <div className="carousel">
                    <div className="carouselControl" id="carouselLeft">Left</div>
                    <div className="carouselControl" id="carouselRight">Right</div>
                </div>

            </div>
        )
    };
    
    export default Projects;