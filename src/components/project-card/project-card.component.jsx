
import React, { useState } from 'react';

const ProjectCard = (props) => {
  const { projectTitle, projectDesc, projectImg, projectLink, projectSkills } = props;
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleShowMoreClick = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className="project-card">
      <img src={projectImg} alt={projectTitle} />
      <h3>{projectTitle}</h3>
      <div className={`description-wrapper ${isDescriptionExpanded ? 'expanded' : ''}`}>
        <p className="project-description">
          Skills Used: <span className="accent">{projectSkills}</span>
        </p>

        <p className="hidden-text">{projectDesc}</p>
      </div>
      <div className="buttons-container">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <button className="button-secondary">Live Preview</button>
        </a>
        <button className="button-primary show-more-button button" onClick={handleShowMoreClick}>
          {isDescriptionExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

