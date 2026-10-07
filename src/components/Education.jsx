import React, { useState } from 'react';
import './Education.css';

const ENABLE_MODAL_POPUP = true; // Set to `true` to enable card click pop-ups else set false

/* Add courses, achievements, and GPA details shown inside the pop-up modal. */
const educationData = [
  {
    id: 1,
    level: "University",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Metropolitan University Bangladesh",
    duration: "2024 - Present",
    status: "Currently Enrolled",
    details: "Focusing on data structures, algorithms, database systems, and full-stack software development, etc",
    // Pop-up extra details:
    gpa: "3.89 / 4.00 (till 7-th semester)",
    keyCourses: ["Data Structures & Algorithms", "Database Systems", "OOP (Java)", "Software Engineering and Design Pattern", "etc"],
    highlights: "Active member of programming club; completed multiple semester projects in Java and web technologies."
  },
  {
    id: 2,
    level: "College",
    degree: "Higher Secondary Certificate (HSC) / Science",
    institution: "Sreemangal Govt. College",
    duration: "2019 - 2021",
    status: "Completed",
    details: "Majored in Physics, Chemistry, Higher Mathematics, and Information & Communication Technology.",
    // Pop-up extra details:
    gpa: "GPA 5.00 / 5.00",
    keyCourses: ["Higher Mathematics", "Physics", "Chemistry", "ICT"],
    highlights: "Developed strong problem-solving habits and foundational interest in computer systems."
  },
  {
    id: 3,
    level: "School",
    degree: "Secondary School Certificate (SSC) / Science",
    institution: "The Buds Residential Model School and College",
    duration: "2008 - 2019",
    status: "Completed",
    details: "Built foundational skills in mathematics, analytical thinking, and basic computer science.",
    // Pop-up extra details:
    gpa: "GPA 5.00 / 5.00",
    keyCourses: ["General Mathematics", "Higher Math", "General Science", "Computer Studies"],
    highlights: "Participated in science fairs and multiple other competitions."
  }
];

const Education = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    if (!ENABLE_MODAL_POPUP) return;
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="education-section" id="education">
      <div className="education-container"> 

        {/* Section Header */}
        <div className="education-header">
          <p className="education-subheading">ACADEMIC JOURNEY</p> 
          <h2 className="education-heading">Educational Background</h2>
          <div className="heading-accent-line"></div>
          {ENABLE_MODAL_POPUP && (
            <p className="modal-hint-text">Click on any card to view academic details</p>
          )}
        </div>

        {/* Timeline List */}
        <div className="education-timeline">
          {educationData.map((item) => (
            <div key={item.id} className="timeline-item">
              
              {/* Timeline Node */}
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>

              {/* Clickable Card */}
              <div 
                className={`timeline-card ${ENABLE_MODAL_POPUP ? 'clickable-card' : ''}`}
                onClick={() => handleCardClick(item)}
              >
                <div className="card-top-row">
                  <span className="education-level-badge">{item.level}</span>
                  <span className="education-duration">{item.duration}</span>
                </div>

                <h3 className="education-degree">{item.degree}</h3>
                <h4 className="education-institution">{item.institution}</h4>
                <p className="education-details">{item.details}</p>

                <div className="card-bottom-row">
                  <div className="card-footer-status">
                    <span className="status-dot"></span>
                    <span className="status-text">{item.status}</span>
                  </div>
                  {ENABLE_MODAL_POPUP && (
                    <span className="card-expand-link">View details ↗</span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {ENABLE_MODAL_POPUP && selectedItem && (
        <div className="education-modal-backdrop" onClick={handleCloseModal}>
          <div 
            className="education-modal-card" 
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            {/* Modal Header */}
            <div className="modal-header">
              <span className="education-level-badge">{selectedItem.level}</span>
              <button 
                type="button" 
                className="modal-close-btn" 
                onClick={handleCloseModal}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <h3 className="modal-degree-title">{selectedItem.degree}</h3>
            <p className="modal-institution-subtitle">
              {selectedItem.institution} • <span className="modal-period">{selectedItem.duration}</span>
            </p>

            <div className="modal-info-pill">
              <strong>Result / GPA:</strong> <span>{selectedItem.gpa}</span>
            </div>

            <div className="modal-section-block">
              <h4 className="modal-block-label">Key Focus & Courses</h4>
              <div className="modal-tags">
                {selectedItem.keyCourses.map((course, idx) => (
                  <span key={idx} className="modal-tag-chip">{course}</span>
                ))}
              </div>
            </div>

            <div className="modal-section-block">
              <h4 className="modal-block-label">Academic Highlights</h4>
              <p className="modal-highlight-text">{selectedItem.highlights}</p>
            </div>

            {/* Modal Close Action */}
            <div className="modal-footer">
              <button type="button" className="modal-action-btn" onClick={handleCloseModal}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Education;