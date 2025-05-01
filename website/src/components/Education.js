import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="section-container">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="section-title">Education</h2>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaGraduationCap className="text-primary me-3" style={{ fontSize: '2rem' }} />
                  <div>
                    <h4 className="mb-0">Bachelor of Science in Information Technology</h4>
                    <p className="text-muted mb-0">2022 - Present</p>
                  </div>
                </div>
                <Card.Text>
                  <strong>Pamantasan ng Cabuyao</strong>
                  <p>Currently in my third year, focusing on modern web development, databases, and UI/UX fundamentals.</p>
                  <p><strong>Key Courses:</strong></p>
                  <ul>
                    <li>Web Development Technologies</li>
                    <li>Database Management Systems</li>
                    <li>Object-Oriented Programming</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Network Administration</li>
                    <li>Systems Analysis and Design</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaGraduationCap className="text-primary me-3" style={{ fontSize: '2rem' }} />
                  <div>
                    <h4 className="mb-0">Senior High School (STEM Strand)</h4>
                    <p className="text-muted mb-0">2020 - 2022</p>
                  </div>
                </div>
                <Card.Text>
                  <strong>Pamantasan ng Cabuyao</strong>
                  <p>Graduated with Honors. Took the STEM strand which laid the foundation for technical subjects in IT.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FaGraduationCap className="text-primary me-3" style={{ fontSize: '2rem' }} />
                  <div>
                    <h4 className="mb-0">Junior High School</h4>
                    <p className="text-muted mb-0">2016 - 2020</p>
                  </div>
                </div>
                <Card.Text>
                  <strong>Pulo National High School</strong>
                  <p>Completed junior high school with consistent academic performance.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
