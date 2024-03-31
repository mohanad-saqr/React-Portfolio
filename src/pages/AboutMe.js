import React from 'react';
import avatar from '../assets/LI.png';
const AboutMe = () => {
    return (
      <section className="about-me">
        <h2>About Me</h2>
        <img src={avatar} alt="avatar" className="avatar" />
        <p>Welcome to my Portfolio Page!
          I have worked extensively in the IT industry during my career.
          I have recently embarked on my coding journey, with aspirations to be
          a Software Developer.</p>          
          <p>As a seasoned IT Consultant, I bring a wealth of experience in designing and implementing robust data governance frameworks, with a specialized focus on SAP ERP system configurations and integrations. My technical skill set extends to advanced proficiency in SQL database management, SAP modules customization, and analytics tools tailored for SAP environments. Additionally, my collaborative approach with diverse stakeholders is underscored by expertise in regulatory compliance, data quality enhancement, and strategic data life-cycle management and within SAP ecosystems.</p> <p>Committed to fostering organizational growth, I prioritize optimizing data governance practices and harnessing the full potential of SAP-based data assets.</p>
          <p>Please find my various projects and repositories which I have completed since commenting my coding journey.</p>
      </section>
    );
  };

export default AboutMe;