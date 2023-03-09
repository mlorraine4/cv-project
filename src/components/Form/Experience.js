import React from "react";

import { closeEdit } from "./formHelpers";

const Experience = ({ handleChange, handleSubmit }) => {
  return (
    <div className="subForm">
      <div className="formTitle">Experience</div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div>
            <label>Job Title</label>
            <input id="jobTitle" onChange={handleChange}></input>
          </div>
          <div>
            <label>Company</label>
            <input id="company" onChange={handleChange}></input>
          </div>
          <div>
            <label>Location</label>
            <input id="location" onChange={handleChange} placeholder="City, State"></input>
          </div>
        </div>
        <div className="flex">
          <div>
            <label>Start Date</label>
            <input id="startDate" onChange={handleChange}></input>
          </div>
          <div>
            <label>End Date</label>
            <input id="endDate" onChange={handleChange}></input>
          </div>
        </div>
        <input type="submit" value="Add"></input>
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
                  ></input>
                </div>
                <div>
                  <label>Company</label>
                  <input id="company" placeholder={experience.company}></input>
                </div>
                <div>
                  <label>Location</label>
                  <input
                    id="location"
                    placeholder={experience.location}
                  ></input>
                </div>
              </div>
              <div className="flex">
                <div>
                  <label>Start Date</label>
                  <input
                    id="startDate"
                    placeholder={experience.startDate}
                  ></input>
                </div>
                <div>
                  <label>End Date</label>
                  <input id="endDate" placeholder={experience.endDate}></input>
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

export {Experience, EditExperience}
