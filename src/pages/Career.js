import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { bookOutline } from "ionicons/icons";
import "../assets/css/carrer.css";
import {
  educationConfig,
  experienceConfig,
  skillsConfig,
} from "../config/careerConfig";

const Career = () => {
  const [selectedSection, setSelectedSection] = useState("All");
  const sections = ["All", "Education", "Experience", "Skills"];

  const renderEducation = () => (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline} />
        </div>
        <h3 className="h3">Education</h3>
      </div>
      <ol className="timeline-list">
        {educationConfig.map((edu, index) => (
          <li key={`edu-${index}`} className="timeline-item">
            <h4 className="h4 timeline-item-title">{edu.org}</h4>
            <span>{edu.session}</span>
            <p className="timeline-text">{edu.course}</p>
          </li>
        ))}
      </ol>
    </section>
  );

  const renderExperience = () => (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline} />
        </div>
        <h3 className="h3">Experience</h3>
      </div>
      <ol className="timeline-list">
        {experienceConfig.map((org, index) => (
          <li key={`exp-${index}`} className="timeline-item">
            <h4 className="h4 timeline-item-title">{org.designation}</h4>
            <span>{org.tenure}</span>
            <p className="timeline-text">{org.name}</p>
          </li>
        ))}
      </ol>
    </section>
  );

  const renderSkills = () => (
    <section className="skill">
      <h3 className="h3 skills-title">My skills</h3>
      <ul className="skills-list content-card">
        {skillsConfig.map((skill, index) => (
          <li key={`skill-${index}`} className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">{skill.name}</h5>
              <data value={skill.level}>{skill.level}%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );

  return (
    <article className="career" data-page="career">
      <header>
        <h2 className="h2 article-title">Career</h2>
      </header>

      {/* Filter Buttons */}
      <ul className="filter-list">
        {sections.map((section, index) => (
          <li key={`section-${index}`} className="filter-item">
            <button
              className={selectedSection === section ? "active" : ""}
              onClick={() => setSelectedSection(section)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>

      {/* Render Sections Conditionally */}
      {(selectedSection === "All" || selectedSection === "Education") && renderEducation()}
      {(selectedSection === "All" || selectedSection === "Experience") && renderExperience()}
      {(selectedSection === "All" || selectedSection === "Skills") && renderSkills()}
    </article>
  );
};

export default Career;
