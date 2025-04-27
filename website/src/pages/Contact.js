import React from 'react';

function Contact() {
  return (
    <section>
      <h2 className="mb-4">Contact Me</h2>
      <div className="card">
        <div className="card-body">
          <p className="mb-4">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
          </p>
          
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center">
              <i className="bi bi-envelope me-2"></i>
              <a href="mailto:your.email@example.com">
                your.email@example.com
              </a>
            </div>
            
            <div className="d-flex align-items-center">
              <i className="bi bi-github me-2"></i>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                github.com/yourusername
              </a>
            </div>
            
            <div className="d-flex align-items-center">
              <i className="bi bi-linkedin me-2"></i>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/yourusername
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;