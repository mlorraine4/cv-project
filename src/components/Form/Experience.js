import React from "react";

import { closeEdit, closeTaskForm } from "./formHelpers";

const Experience = ({ handleChange, handleSubmit }) => {
  return (
    <div className="subForm">
      <div className="formTitle">Experience</div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div>
            <label>Job Title</label>
            <input id="jobTitle" onChange={handleChange} type="text"></input>
          </div>
          <div>
            <label>Company</label>
            <input id="company" onChange={handleChange} type="text"></input>
          </div>
          <div>
            <label>Location</label>
            <input
              id="location"
              onChange={handleChange}
              type="text"
            ></input>
          </div>
        </div>
        <div className="flex">
          <div>
            <label>Start Date</label>
            <input id="startDate" onChange={handleChange} type="text"></input>
          </div>
          <div>
            <label>End Date</label>
            <input id="endDate" onChange={handleChange} type="text"></input>
          </div>
        </div>
        <input type="submit" value="add"></input>
        <div className="experienceEmpty formError">
          *All fields are required
        </div>
      </form>
    </div>
  );
};

const EditExperience = ({ experienceArray, handleEdit, handleDelete }) => {
  return (
    <div className="editExperience">
      <button className="closeButton" onClick={()=>{closeEdit("Experience")}}>X</button>
      {experienceArray.map((experience) => {
        return (
          <div key={experience.id}>
            <form
              onSubmit={handleEdit}
              data-key={experience.id}
              className="editExperienceSub"
            >
              <div className="flex">
                <div>
                  <label>Job Title</label>
                  <input
                    id="jobTitle"
                    placeholder={experience.jobTitle}
                    type="text"
                  ></input>
                </div>
                <div>
                  <label>Company</label>
                  <input
                    id="company"
                    placeholder={experience.company}
                    type="text"
                  ></input>
                </div>
                <div>
                  <label>Location</label>
                  <input
                    id="location"
                    placeholder={experience.location}
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="flex">
                <div>
                  <label>Start Date</label>
                  <input
                    id="startDate"
                    placeholder={experience.startDate}
                    type="text"
                  ></input>
                </div>
                <div>
                  <label>End Date</label>
                  <input
                    id="endDate"
                    placeholder={experience.endDate}
                    type="text"
                  ></input>
                </div>
              </div>
              <input type="submit" value="update"></input>
            </form>
            <button data-key={experience.id} onClick={handleDelete}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

const ExperienceTasks = ({experienceArray, handleSubmit, handleChange}) => {
  return (
    <div className="subForm taskForm">
      <button
        className="closeButton"
        onClick={closeTaskForm}
      >
        X
      </button>
      <form onSubmit={handleSubmit}>
        <div className="formTitle">Tasks</div>
        {experienceArray.map((experience) => {
          return (
            <div key={experience.id} className="flex">
              <input
                type="radio"
                data-key={experience.id}
                value={experience.jobTitle}
                id={experience.jobTitle}
                name="job"
              />
              <label>{experience.jobTitle}</label>
            </div>
          );
        })}
        <textarea
          id="task"
          placeholder="describe your tasks for this job"
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="add"></input>
        <div className="formError tasksEmpty">*Please fill out this field</div>
      </form>
    </div>
  );
}

export {Experience, EditExperience, ExperienceTasks}
