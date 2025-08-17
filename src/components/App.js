import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      name: "AI Healthcare Assistant",
      description: "An AI-powered platform to help doctors analyze medical data and provide better treatment."
    },
    {
      name: "Green Energy Tracker",
      description: "A web app to monitor and optimize renewable energy usage in smart homes."
    },
    {
      name: "Space Explorer VR",
      description: "A virtual reality experience that allows users to explore the solar system interactively."
    }
  ];
  return (
    <div id="main" className="ns-wrapper">
      {projects.map((project,index) =>(
        <div key={index}>
          <h1 data-ns-test="project-name" >{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  )
}


export default App;
