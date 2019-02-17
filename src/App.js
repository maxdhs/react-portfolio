import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/contact">Contact</Link>
                <Main />
            </div>
        );
    }
}

export default App;
