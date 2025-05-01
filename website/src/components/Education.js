import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "Bachelor of Science in Information Technology",
      period: "2022 - Present",
      institution: "Pamantasan ng Cabuyao",
      icon: <FaUniversity className="text-white" size={20} />,
      description: "Currently in my third year, focusing on modern web development, databases, and UI/UX fundamentals.",
      courses: [
        "Web Development Technologies",
        "Database Management Systems",
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
        "Network Administration",
        "Systems Analysis and Design"
      ]
    },
    {
      id: 2,
      title: "Senior High School (STEM Strand)",
      period: "2020 - 2022",
      institution: "Pamantasan ng Cabuyao",
      icon: <FaGraduationCap className="text-white" size={20} />,
      description: "Graduated with Honors. Took the STEM strand which laid the foundation for technical subjects in IT.",
      courses: []
    },
    {
      id: 3,
      title: "Junior High School",
      period: "2016 - 2020",
      institution: "Pulo National High School",
      icon: <FaSchool className="text-white" size={20} />,
      description: "Completed junior high school with consistent academic performance.",
      courses: []
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  return (
    <section className="section-container py-5 bg-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-center"
        >
          <h2 className="display-5 fw-bold mb-3">Education Timeline</h2>
          <div className="mx-auto bg-primary" style={{ height: "4px", width: "80px" }}></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="position-relative"
        >
          {/* Center timeline line */}
          <div
            className="position-absolute start-50 translate-middle-x h-100"
            style={{ width: "4px", backgroundColor: "#dee2e6", zIndex: 0 }}
          ></div>

          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="mb-5"
            >
              <div className="row align-items-center">
                {index % 2 === 0 ? (
                  <>
                    {/* Left content */}
                    <div className="col-md-5 text-md-end mb-4 mb-md-0">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white p-4 rounded shadow-sm border-start border-primary border-4"
                      >
                        <h3 className="fs-4 fw-bold mb-1">{item.title}</h3>
                        <p className="text-primary fw-semibold mb-2 small">{item.period}</p>
                        <h4 className="fs-5 text-secondary mb-3">{item.institution}</h4>
                        <p className="text-muted mb-3">{item.description}</p>

                        {item.courses.length > 0 && (
                          <div>
                            <p className="fw-semibold mb-2">Key Courses:</p>
                            <ul className="text-muted ps-3">
                              {item.courses.map((course, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.1 * idx }}
                                >
                                  {course}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Center icon */}
                    <div className="col-md-2 d-flex justify-content-center my-3 my-md-0">
                      <motion.div
                        animate={pulseAnimation}
                        className="d-flex align-items-center justify-content-center bg-primary rounded-circle shadow"
                        style={{ width: "48px", height: "48px", zIndex: 1 }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>

                    {/* Right empty space */}
                    <div className="col-md-5 d-none d-md-block"></div>
                  </>
                ) : (
                  <>
                    {/* Left empty space */}
                    <div className="col-md-5 d-none d-md-block"></div>

                    {/* Center icon */}
                    <div className="col-md-2 d-flex justify-content-center my-3 my-md-0">
                      <motion.div
                        animate={pulseAnimation}
                        className="d-flex align-items-center justify-content-center bg-primary rounded-circle shadow"
                        style={{ width: "48px", height: "48px", zIndex: 1 }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>

                    {/* Right content */}
                    <div className="col-md-5 mb-4 mb-md-0">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white p-4 rounded shadow-sm border-start border-primary border-4"
                      >
                        <h3 className="fs-4 fw-bold mb-1">{item.title}</h3>
                        <p className="text-primary fw-semibold mb-2 small">{item.period}</p>
                        <h4 className="fs-5 text-secondary mb-3">{item.institution}</h4>
                        <p className="text-muted mb-3">{item.description}</p>

                        {item.courses.length > 0 && (
                          <div>
                            <p className="fw-semibold mb-2">Key Courses:</p>
                            <ul className="text-muted ps-3">
                              {item.courses.map((course, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.1 * idx }}
                                >
                                  {course}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
