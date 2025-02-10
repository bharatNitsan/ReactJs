import React from 'react';

const projects = [
  { name: 'Project 1', description: 'A simple React app for task management' },
  { name: 'Project 2', description: 'A portfolio website built with React' },
  { name: 'Project 3', description: 'A weather app using OpenWeather API' }
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
