import React from "react";
import './App.css';
import Weather from "./components/Weather";
import github from "./Images/github.png";

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project">
        <div className="project-image">
          <a target="_blank" href="https://github.com/Pensum84">
            <img src={github} alt="GitHub Icon" />
          </a>
        </div>
        <div className="project-title">
          <h2>GitHub</h2>
        </div>
        <div className="project-description">
          <p>
            Det här är länken till mitt repo på GitHub. <br />
            Här lägger jag upp kod som jag jobbar på både smått som stort.
          </p>
        </div>
      </div>
      <hr />

        <div className="api">
          <Weather />
        </div>
        <div className="project-title">
          <h2>Väder API</h2>
          </div>
        <div className="project-description">
          <p>
            Här har jag kört in ett väder API på min sida <br />
            En utav uppgifterna man skulle utföra i sitt portfolio bygge.
          </p>
        </div>
      </div>
  );
}

export default Projects;
