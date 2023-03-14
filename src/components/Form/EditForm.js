import React from "react";
import { EditEducation } from "./Education";
import { EditExperience } from "./Experience";
import { downloadPDF } from "./formHelpers";
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
  handleDeleteSkills,
}) => {
  return (
    <div>
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

const OpenEditButtons = ({openEditEducation, openEditExperience, openEditSkills, openTaskForm}) => {
  return (
    <div className="editButtons">
      <div className="editTitle">Edit Your CV</div>
      <div className="buttons">
        <div>
          <button className="editButton" onClick={openEditEducation}>
            edit education
          </button>
        </div>
        <button className="editButton" onClick={openEditExperience}>
          edit experience
        </button>
        <button className="editButton" onClick={openEditSkills}>
          edit skills
        </button>
        <button className="download" onClick={downloadPDF}>download cv</button>
      </div>
      <div>add bullet points for each place of work here:</div>
      <button className="taskButton" onClick={openTaskForm}>add tasks</button>
    </div>
  );
};

export {EditForm, OpenEditButtons }
