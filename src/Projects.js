import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/"
        image="./emmimodell.jpg"
        title="Emmis Hemsida"
        category="Website"
      />
    </div>
  );
}

export default Projects;
