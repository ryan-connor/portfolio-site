import React from 'react';


const Header = (props) => {


        return (
            <div className="header">
                <div id="name" >Connor Ryan</div>
                <div className="headerItems">
                    <div className="headerItem"><a href="#contentCont">About</a></div>
                    <div className="headerItem"><a href="#projectsSection">Projects</a></div>
                    <div className="headerItem"><a href="#contactSection">Contact</a></div>
                </div>

            </div>
        )
    };
    
    export default Header;



    // <div className="headerItem"><a href="#aboutSection">About</a>About</div>
    // <div className="headerItem"><a href="#projectsSection">Projects</a>Projects</div>
    // <div className="headerItem"><a href="#contactSection">Contact</a>Contact</div>