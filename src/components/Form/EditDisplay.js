import React from "react";
import { EditEducation } from "./Education";
import { EditExperience } from "./Experience";
import { EditSkills } from "./Skills";

const EditForm = ({
  educationArray,
  experienceArray,
  skillsArray,
  handleEditEducation,
  handleDeleteEducation,
  handleEditExperience,
  handleDeleteExperience,
  handleEditSkills,
  openEditSkills,
  handleDeleteSkills,
  openEditEducation,
  openEditExperience,
}) => {
  return (
    <div>
      <div className="editTitle">Edit Your CV</div>
      <div>
        <button onClick={openEditEducation}>edit education</button>
        <button onClick={openEditExperience}>edit experience</button>
        <button onClick={openEditSkills}>edit skills</button>
      </div>
      <EditEducation
        educationArray={educationArray}
        handleEdit={handleEditEducation}
        handleDelete={handleDeleteEducation}
      />
      <EditExperience
        experienceArray={experienceArray}
        handleEdit={handleEditExperience}
        handleDelete={handleDeleteExperience}
      />
      <EditSkills
        skillsArray={skillsArray}
        handleEdit={handleEditSkills}
        handleDelete={handleDeleteSkills}
      />
    </div>
  );
};

export default EditForm;
