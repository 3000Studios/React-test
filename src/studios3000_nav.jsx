import React from 'react';

/**
 * Studios3000 Navigation Component
 * A simple navigation bar component for React applications
 */
const Studios3000Nav = () => {
  return (
    <nav className="studios3000-nav">
      <div className="nav-container">
        <div className="nav-brand">
          <a href="/">3000 Studios</a>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Studios3000Nav;
