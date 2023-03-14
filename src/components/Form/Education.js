import React, { useState } from "react";
import { closeEdit, closeEducation } from "./formHelpers";

const Education = ({ handleSubmit, handleChange }) => {
  return (
    <div className="subForm">
      <div className="formTitle">Education</div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div>
            <label>Degree</label>
            <input id="degree" onChange={handleChange} ></input>
          </div>
          <div>
            <label>School</label>
            <input id="school" onChange={handleChange} ></input>
          </div>
          <div>
            <label>Location</label>
            <input id="location" onChange={handleChange} ></input>
          </div>
        </div>
        <div className="flex">
          <div>
            <label>Start Date</label>
            <input id="startDate" onChange={handleChange} ></input>
          </div>
          <div>
            <label>End Date</label>
            <input id="endDate" onChange={handleChange} ></input>
          </div>
        </div>
        <input type="submit" value="add"></input>
        <div className="educationEmpty formError">*All fields are required</div>
      </form>
    </div>
  );
};

const EditEducation = ({ educationArray, handleEdit, handleDelete }) => {
  return (
    <div className="editEducation">
      <button className="closeButton" onClick={()=>{closeEdit("Education")}}>X</button>
      {educationArray.map((education) => {
        return (
          <div key={education.id}>
            <form
              onSubmit={handleEdit}
              data-key={education.id}
              className="editEducationSub"
            >
              <div className="flex">
                <div>
                  <label>Degree</label>
                  <input
                    id="degree"
                    placeholder={education.degree}
                    onChange={handleEdit}
                  ></input>
                </div>
                <div>
                  <label>School</label>
                  <input id="school" placeholder={education.school}></input>
                </div>
                <div>
                  <label>Location</label>
                  <input id="location" placeholder={education.location}></input>
                </div>
              </div>
              <div className="flex">
                <div>
                  <label>Start Date</label>
                  <input
                    id="startDate"
                    placeholder={education.startDate}
                  ></input>
                </div>
                <div>
                  <label>End Date</label>
                  <input id="endDate" placeholder={education.endDate}></input>
                </div>
              </div>
              <input type="submit" value="update"></input>
            </form>
            <button data-key={education.id} onClick={handleDelete}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export { Education, EditEducation };
