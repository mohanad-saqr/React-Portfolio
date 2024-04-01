import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    // Replace with your actual projects
    { title: 'Code Quiz', 
      imageUrl: require('../assets/cq.png'), 
      deployedUrl: 'https://mohanad-saqr.github.io/Code-Quiz/', 
      repoUrl: 'https://github.com/mohanad-saqr/Code-Quiz' 
    },
    // Add more projects as needed
    { title: 'Daily Reminder Guide', 
    imageUrl: require('../assets/dr.png'), 
    deployedUrl: 'https://project2-heroku-deployment-b854ca21b876.herokuapp.com/', 
    repoUrl: 'https://github.com/mohanad-saqr/Daily-Reminder-Guide' 
  },
  { title: 'Text Editor', 
  imageUrl: require('../assets/te.png'), 
  deployedUrl: 'https://text-editor-ms-1e275d9bc320.herokuapp.com/', 
  repoUrl: 'https://github.com/mohanad-saqr/Text-Editor' 
},
{ title: 'Work Day Scheduler', 
imageUrl: require('../assets/wds.png'), 
deployedUrl: 'https://mohanad-saqr.github.io/Work-Day-Scheduler/', 
repoUrl: 'https://github.com/mohanad-saqr/Work-Day-Scheduler' 
},

{ title: 'Weather Dashboard', 
imageUrl: require('../assets/wd.png'), 
deployedUrl: 'https://mohanad-saqr.github.io/Weather-Dashboard/', 
repoUrl: 'https://github.com/mohanad-saqr/Weather-Dashboard' 
},
{ title: 'Regex Tutorial', 
imageUrl: require('../assets/re.png'), 
deployedUrl: 'https://gist.github.com/mohanad-saqr/4c8cb61ecfab9c1ebeebf043070e1743', 
repoUrl: 'https://github.com/mohanad-saqr/Regex-Tutorial' 
},
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
