import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav>
          <h1>Lakshmi Gurammanavar</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>2nd-Year CS Student</h2>
          <h1>Web Developer</h1>
          <p>Building with React, Node.js, and JavaScript. Passionate about coding and problem-solving.</p>
          <button className="cta">View Projects</button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>Currently studying Computer Science in Bengaluru. Experienced with full-stack web development, including npm, Express.js, and React projects.</p>
        <div className="skills">
          <span>JavaScript</span>
          <span>java</span>
          <span>C++</span>
          <span>Node.js</span>
          <span>Git</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>To-Do App</h3>
            <p>React app with local storage for task management.</p>
            <div>React, Local Storage</div>
            <a href="https://github.com/lakshmifg/todo-app/tree/main/todoapp" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="project-card">
            <h3>Weather App</h3>
            <p>Fetch weather data using OpenWeather API.</p>
            <div>JavaScript, Fetch API</div>
            <a href="https://github.com/lakshmifg/weather-app" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="project-card">
            <h3>Express API</h3>
            <p>Backend API with npm and Express.js.</p>
            <div>Node.js, Express</div>
            <a href="https://github.com/yourusername/express-api" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: gurammanavarl.email@example.com</p>
        <p>LinkedIn:www.linkedin.com/in/
lakshmi-fg-636bb7329
Vanity URL name
 / GitHub: https://github.com/lakshmifg</p>
      </section>

      <footer>
        <p>&copy; 2026 Lakshmi Gurammanavar. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
