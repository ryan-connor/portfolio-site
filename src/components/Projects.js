import React, {useState, useEffect} from 'react';
import ProjectTile from './ProjectTile';
import ExampleAppImage from './images/ExampleAppImage.png';
import ticTacToe from './images/ticTacToe.png';
import tileGame from './images/tileGame.png';
import toDoList from './images/toDoList.png';
import weatherApp from './images/weatherApp.png';
import shoppingCart from './images/shoppingCart.png';
import etchASketch from './images/etchASketch.png';
import calculator from './images/calculator.png';

//might need to import images in


const Projects = (props) => {

    //render 6? projects based on array of project objects that can be passed in as, test number to render on screen
    let savedProjects = [
        {
            title: 'Inventory App0',
            desc: 'Simple MVC app that displays inventory information from a database and populates EJS templates for various routes.',
            image: ExampleAppImage,
            tags: ['Node','Express','MongoDB','EJS'],
            gitLink: '',
        },
        {
            title: 'To Do List App1',
            desc: 'To Do list app that allows users to create tasks with descriptions/due dates, group them under multiple task projects and update/delete them.',
            image: toDoList,
            tags: ['JavaScript','HTML','CSS'],
            gitLink: '',
        },
        {
            title: 'Mock Shopping Cart2',
            desc: 'Mock shopping website using React Router with various page routes and items that can be added to a shopping cart which then displays a page with all items/total cost',
            image: shoppingCart,
            tags: ['React','HTML','CSS'],
            gitLink: '',
        },
        {
            title: 'Weather App3',
            desc: 'Displays weather conditions based on user search criteria using openweather API.',
            image: weatherApp,
            tags: ['JavaScript','HTML','CSS'],
            gitLink: '',
        },
        {
            title: 'Tile Memory Game4',
            desc: 'Tile memory game that displays randomly mixed tiles that change position every time a user clicks and counts a high score.',
            image: tileGame,
            tags: ['React','HTML','CSS'],
            gitLink: '',
        },
        {
            title: 'Tic Tac Toe5',
            desc: 'Tic-Tac-Toe game that allows 2 players to enter their names and then play tic-tac-toe against each other',
            image: ticTacToe,
            tags: ['JavaScript','HTML','CSS'],
            gitLink: '',
        },
        {
            title: 'Calculator6',
            desc: 'Simple calculator with all basic functionality (add,subtract,multiply,divide), decimals, and all clear buttons',
            image: calculator,
            tags: ['JavaScript','HTML','CSS'],
            gitLink: '',
        },
        {
            title: 'Etch-a-Sketch7',
            desc: 'Etch-a-Sketch/drawing type game that allows users to input a grid size and then displays a grid of squares that change colors upon hover and get 10% darker on each color change',
            image: etchASketch,
            tags: ['JavaScript','HTML','CSS'],
            gitLink: '',
        },
        {
            title: 'CV Generator8',
            desc: 'CV generator app with template sections for each part of a typical resume that can be edited and added to the generated resume, and then updated/deleted',
            image: ExampleAppImage,
            tags: ['JavaScript','HTML','CSS'],
            gitLink: '',
        },
        {
            title: 'Members Message Board9',
            desc: 'Message board CRUD app made with React frontend, an Express REST API Backend, and MongoDB. Users can create an account, and sign in to post messages. ',
            image: ExampleAppImage,
            tags: ['React', 'Express', 'MongoDB', 'REST API'],
            gitLink: '',
        },
    ];

    //loop through here and put all into array, then just render the array of components as needed
    let tiles = savedProjects.map( tile=> {
        return <ProjectTile obj={tile}/>
    });

    let numProjects = savedProjects.length; 
    let tileWidth= 390; //tile size to set for resize
    let initialTiles = Math.floor(window.innerWidth/tileWidth)*2;

    const [numToDisplay, setNumToDisplay]= useState(initialTiles); //always sets initial state to 6 tiles
    const [start,setStart] = useState(0);
    const [end, setEnd] = useState(numToDisplay);

    //code to dynamically render number of tiles to fit nicely in grid
    useEffect(() => {
        function resizeGrid() {

        let width = window.innerWidth;
        
        let numTiles = Math.floor(width/tileWidth)*2;
        console.log("start:", start);
        console.log("end:", end);
        console.log("should display:", numTiles);
        
        if (numTiles-numToDisplay !== 0) {
            if (numTiles>=2) {
                setNumToDisplay(numTiles);
                setEnd(adjustIndex(end+(numTiles-numToDisplay)));

            } else {
                setNumToDisplay(2);
                //setEnd(adjustIndex(end+(numTiles-numToDisplay)));

            }

        }
    }
        window.addEventListener('resize', resizeGrid)
        return () => {
          window.removeEventListener('resize', resizeGrid)
    }
    });

    //function to adjust array indexes when go out of bounds
    let adjustIndex = (num) => {
        if (num>=0 && num<numProjects) {
            //no adjustment needed
            return num;
        } else if (num<0) {
            //index is negative
            return numProjects + num;

        } else if (num>= numProjects) {
            //index is outside on high end
            return num - numProjects;
        }
    };

    let cycleProjectsForward = () => {
        setStart(adjustIndex(start + numToDisplay));
        setEnd(adjustIndex(end+numToDisplay));
    };

    let cycleProjectsBackward = () => {
        setStart(adjustIndex(start- numToDisplay));
        setEnd(adjustIndex(end-numToDisplay));
    };


    //function to cycle tiles
    let cycleTiles = () => {

        //note that currently it displays no tiles when it gets too small to fit any
        if (start<=end) {
            return tiles.slice(start,end);
        } else {
            return [...tiles.slice(start),...tiles.slice(0,end)];
        }
    };


    // let tilesToRender = tiles.slice(start,end);
    let tilesToRender = cycleTiles();

        return (
            <div className="projects" id="projectsSection">
                <div id="projectsTitle" >Projects</div>
                <div className="projectTilesCont">
                    {tilesToRender}              
                </div>
                <div className="carousel">
                    <div className="carouselControl" id="carouselLeft" onClick={cycleProjectsBackward}>{'<'}</div>
                    <div>View More Projects</div>
                    <div className="carouselControl" id="carouselRight"onClick={cycleProjectsForward}>{'>'}</div>
                </div>

            </div>
        )
    };
    
    export default Projects;