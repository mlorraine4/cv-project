import React from "react";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import PersonalPreview from "./PersonalPreview";
import SkillsPreview from "./SkillsPreview";

// TODO:this only displays when all forms are submitted!

const CVMain = ({ props }) => {
  // console.log(props);
  const fullName = props.cv.firstName + " " + props.cv.lastName;
  return (
    <div className="cv">
      <div className="nameTitle">{fullName}</div>
      <hr></hr>
      <div className="flex">
        <div className="cvLeft">
          <EducationPreview educationArray={props.educationArray} />
          <ExperiencePreview 
          experienceArray={props.experienceArray}
          taskArray={props.taskArray}
           />
        </div>
        <div className="cvRight">
          {/* TODO: only give email & phone to personal prev */}
          <PersonalPreview cv={props.cv} />
          <SkillsPreview skillsArray={props.skillsArray} />
        </div>
      </div>
    </div>
  );
};

export default CVMain;
