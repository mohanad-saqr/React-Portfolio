import React from 'react';


function Project({ title, imageUrl, deployedUrl, repoUrl }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <br></br>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Application</a>
      <br></br>
      <br></br>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      <br></br>
    </div>
  );
}

export default Project;
