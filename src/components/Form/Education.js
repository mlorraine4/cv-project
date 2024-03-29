import React from "react";
import { closeEdit } from "./formHelpers";

const Education = ({ handleSubmit, handleChange }) => {
  return (
    <div className="subForm">
      <div className="formTitle">Education</div>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div>
            <label>Degree</label>
            <input id="degree" onChange={handleChange} type="text"></input>
          </div>
          <div>
            <label>School</label>
            <input id="school" onChange={handleChange} type="text"></input>
          </div>
          <div>
            <label>Location</label>
            <input id="location" onChange={handleChange} type="text"></input>
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
        <div className="educationEmpty formError">*All fields are required</div>
      </form>
    </div>
  );
};

const EditEducation = ({ educationArray, handleEdit, handleDelete }) => {
  return (
    <div className="editEducation">
      <button
        className="closeButton"
        onClick={() => {
          closeEdit("Education");
        }}
      >
        X
      </button>
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
                    type="text"
                  ></input>
                </div>
                <div>
                  <label>School</label>
                  <input
                    id="school"
                    placeholder={education.school}
                    type="text"
                  ></input>
                </div>
                <div>
                  <label>Location</label>
                  <input
                    id="location"
                    placeholder={education.location}
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="flex">
                <div>
                  <label>Start Date</label>
                  <input
                    id="startDate"
                    placeholder={education.startDate}
                    type="text"
                  ></input>
                </div>
                <div>
                  <label>End Date</label>
                  <input
                    id="endDate"
                    placeholder={education.endDate}
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="educationEditEmpty formError">
                *All fields are required
              </div>
              <input type="submit" value="update"></input>
            </form>
            <button
              className="delete"
              data-key={education.id}
              onClick={handleDelete}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export { Education, EditEducation };
