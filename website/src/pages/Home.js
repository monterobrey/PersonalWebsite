// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="text-center py-5">
      <div className="container">
        <h1 className="display-4 mb-4">Welcome to My Portfolio</h1>
        <p className="lead mb-4">
          Hello! I'm [Your Name], a [Your Profession/Field] passionate about creating impactful solutions.
        </p>
        <Link to="/about" className="btn btn-primary btn-lg">
          Learn More About Me
        </Link>
      </div>
    </section>
  );
}

export default Home;