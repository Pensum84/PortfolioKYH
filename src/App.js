import React, {useEffect} from "react";
import modal from "./Images/modal.jpg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import Playground from "./components/Playground";
import gsap from 'gsap';
import DataFetch from "./components/DataFetch";

function App(){
  useEffect(()=>{
    const tl = gsap.timeline();

    tl.from(".box", 1.5,{
      y:1500,
      opacity: 0,
      ease: 'power4.out'
    }).from('.rubrik',1,{
      x:200,
      opacity: 0
    }).from('.underRubrik',1,{
      x:200,
      opacity: 0,
      delay: 1
    })
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <img src={modal} className="logo" alt="Logo image" />
          <div className="navigation-sub">
            <a href="./" className="item">
              Home
            </a>
            <a href="/Projects" className="item">
              Projects
            </a>
            <a href="./About" className="item">
              About Me
            </a>
          </div>
        </div>
        <Route exact path="/" component={Playground} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/About" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
