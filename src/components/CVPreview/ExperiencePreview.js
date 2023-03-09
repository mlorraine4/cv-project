import React from "react";

const ExperiencePreview = (props) => {
  const { experienceArray } = props;
  return (
    <div className="cvComponent">
      <div className="cvHeader">Work Experience</div>
      {experienceArray.map((experience) => {
        return (
          <div className="experienceItem" key={experience.id}>
            <div className="experienceDates">
              {experience.startDate} - {experience.endDate}
            </div>
            <div className="jobTitle">{experience.jobTitle}</div>
            <div className="company">{experience.company}</div>
            <div className="experienceLocation">{experience.location}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperiencePreview;
