// pages/About.js
import React from 'react';

function About() {
  return (
    <section>
      <h2 className="mb-4">About Me</h2>
      <div className="card mb-4">
        <div className="card-body">
          <p className="mb-3">
            I am a passionate [Your Profession] with a strong background in [Your Field]. I enjoy tackling complex problems and creating elegant solutions.
          </p>
          <p className="mb-3">
            In my free time, I enjoy [Hobby 1], [Hobby 2], and [Hobby 3]. These activities help me maintain a balanced lifestyle and continuously inspire my professional work.
          </p>
          <h3 className="h5 mt-4 mb-3">Skills</h3>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-light text-dark">JavaScript</span>
            <span className="badge bg-light text-dark">React</span>
            <span className="badge bg-light text-dark">Node.js</span>
            <span className="badge bg-light text-dark">HTML/CSS</span>
            <span className="badge bg-light text-dark">Git</span>
            {/* Add more skills as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;