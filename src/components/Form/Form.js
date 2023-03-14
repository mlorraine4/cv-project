import React from "react";
import { Education } from "./Education";
import { Experience } from "./Experience";
import Personal from "./Personal";
import { Skills } from "./Skills";
import { EditForm } from "./EditForm";
// TODO: don't send ALL props!
const Form = ({
  educationArray,
  experienceArray,
  skillsArray,
  handleChangeEducation,
  handleSubmitEducation,
  handleEditEducation,
  handleSubmitPersonal,
  validateEmail,
  validatePhone,
  handleChangeExperience,
  handleSubmitExperience,
  handleEditExperience,
  handleChangeSkills,
  handleSubmitSkills,
  handleEditSkills,
  openEditSkills,
  handleDeleteSkills,
  handleDeleteEducation,
  handleDeleteExperience,
  openEditExperience,
  openEditEducation,
}) => {
  return (
    <div className="formMain">
      <Personal
        handleSubmit={handleSubmitPersonal}
        validateEmail={validateEmail}
        validatePhone={validatePhone}
      />
      <Education
        handleChange={handleChangeEducation}
        handleSubmit={handleSubmitEducation}
      />
      <Experience
        handleChange={handleChangeExperience}
        handleSubmit={handleSubmitExperience}
      />
      <Skills
        handleChange={handleChangeSkills}
        handleSubmit={handleSubmitSkills}
      />
      <EditForm
        educationArray={educationArray}
        experienceArray={experienceArray}
        skillsArray={skillsArray}
        handleEditEducation={handleEditEducation}
        handleEditExperience={handleEditExperience}
        handleDeleteEducation={handleDeleteEducation}
        handleDeleteExperience={handleDeleteExperience}
        handleEditSkills={handleEditSkills}
        openEditSkills={openEditSkills}
        openEditEducation={openEditEducation}
        openEditExperience={openEditExperience}
        handleDeleteSkills={handleDeleteSkills}
      />
    </div>
  );
};

export default Form;
