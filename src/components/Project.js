import React from 'react';

function Project({ title, imageUrl, deployedUrl, repoUrl }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
}

export default Project;
