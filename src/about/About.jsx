import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>My First Project on React</h1>
      <p>This is my first project built with React. I used the following technology stack:</p>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Axios</li>
        <li>React Hooks</li>
        <li>ES6+</li>
        <li>HTML/CSS</li>
      </ul>
      <p>It's a simple blog application that allows users to create and manage their posts. It also includes features like liking and deleting posts.</p>
      <p>I've learned a lot during the development of this project, and I'm excited to continue exploring React and building more applications.</p>
      <p>Thank you for checking out my project!</p>
      <div className="links-container">
        <a href="https://github.com/publictool1" className="link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/denis-akhmadullin-260a58276/" className="link">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;
