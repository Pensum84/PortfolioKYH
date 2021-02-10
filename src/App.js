import React from 'react';
import modal from './Images/modal.jpg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects';
import Articles from "./Articles";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route exact path="/Articles" component={Articles} />
        <Route exact path="/About" component={About} />

        <div className="navigation">
          <img src={modal} className="logo" alt="Logo image" />
          <div className="navigation-sub">
            
            <a href="/" className="item">
              Projects
            </a>
            <a href="./About" className="item">
              About
            </a>
            <a href="./Articles" className="item">
              Articles
            </a>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
