import React from "react";
import { closeEdit } from "./formHelpers";

const Skills = ({ handleSubmit, handleChange }) => {
  return (
    <div className="subForm">
      <form onSubmit={handleSubmit}>
        <div className="formTitle">Skills</div>
        <input
          id="skill"
          onChange={handleChange}
          type="text"
        ></input>
        <input type="submit" value="add"></input>
        <div className="formError skillsEmpty">*Please fill out this field</div>
      </form>
    </div>
  );
};

const EditSkills = ({ handleEdit, skillsArray, handleDelete }) => {
  return (
    <div className="editSkills">
      <button
        className="closeButton"
        onClick={() => {
          closeEdit("Skills");
        }}
      >
        X
      </button>
      {skillsArray.map((skill) => {
        return (
          <div key={skill.id} className="editSkillsSub">
            <form onSubmit={handleEdit} data-key={skill.id}>
              <input id="skill" placeholder={skill.text} type="text"></input>
              <input type="submit" value="update" id="update"></input>
            </form>
            <button data-key={skill.id} onClick={handleDelete}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export { Skills, EditSkills };
