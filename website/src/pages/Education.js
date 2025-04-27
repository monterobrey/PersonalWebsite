// pages/Education.js
import React from 'react';

function Education() {
  const education = [
    {
      id: 1,
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      year: "2018-2022",
      description: "Focused on software development, algorithms, and data structures."
    },
    {
      id: 2,
      school: "Another University/Institution",
      degree: "Certificate in Web Development",
      year: "2023",
      description: "Intensive program covering modern web technologies and frameworks."
    }
  ];

  return (
    <section>
      <h2 className="mb-4">Education</h2>
      <div className="row">
        {education.map(edu => (
          <div key={edu.id} className="col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="h5">{edu.school}</h3>
                <p className="text-muted mb-1">{edu.degree}</p>
                <p className="small text-muted mb-3">{edu.year}</p>
                <p>{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;