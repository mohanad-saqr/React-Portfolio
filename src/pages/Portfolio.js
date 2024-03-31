import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    // Replace with your actual projects
    { title: 'Code-Quiz', 
      imageUrl: require('../assets/cq.png'), 
      deployedUrl: 'https://mohanad-saqr.github.io/Code-Quiz/', 
      repoUrl: 'https://github.com/mohanad-saqr/Code-Quiz' 
    },
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
