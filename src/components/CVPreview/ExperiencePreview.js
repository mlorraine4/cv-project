import React from "react";
import listIcon from "../../images/arrow.png";

const ExperiencePreview = ({ experienceArray, taskArray }) => {
  if (experienceArray.length !== 0) {
    return (
      <div className="cvComponent">
        <div className="cvHeader">PROFESSIONAL EXPERIENCE</div>
        {experienceArray.map((experience) => {
          return (
            <div className="experienceItem" key={experience.id}>
              <div className="flex space">
                <div className="jobTitle">{experience.jobTitle}</div>
                <div className="experienceDates">
                  {experience.startDate} - {experience.endDate}
                </div>
              </div>
              <div className="company">
                {experience.company}, {experience.location}
              </div>
              <div className="taskComponent">
                {taskArray.map((task) => {
                  if (experience.id === task.key) {
                    return (
                      <div key={task.id} className="flex taskItem">
                        <img src={listIcon} className="bulletPoint"></img>
                        <div>{task.text}</div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default ExperiencePreview;
