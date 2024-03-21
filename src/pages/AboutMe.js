import React from 'react';
import avatar from '../assets/avatar.jpg';
const AboutMe = () => {
    return (
      <section className="about-me">
        <h2>About Me</h2>
        <img src={avatar} alt="Avatar" className="avatar" />
        <p>Your bio goes here...</p>
      </section>
    );
  };

export default AboutMe;