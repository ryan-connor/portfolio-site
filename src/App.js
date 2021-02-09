import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProjectTile from './components/ProjectTile';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      < Header />
      < About /> 
      {/* < ProjectTile /> */}
    
      <Projects />
      < Contact />


    </div>
  );
}

export default App;
