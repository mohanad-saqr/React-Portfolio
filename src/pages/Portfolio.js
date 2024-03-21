import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    // Replace with your actual projects
    { title: 'Project 1', imageUrl: 'path-to-image', deployedUrl: 'deployed-link', repoUrl: 'repo-link' },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
