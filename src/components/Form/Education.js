import React from "react";

const Education = ({handleChange}) => {
  return (
    <div>
      <div className="educationTitle">Education</div>
      <form onSubmit={handleChange}>
        <div className="flex">
          <div>
            <label>Degree</label>
            <input id="degree"></input>
          </div>
          <div>
            <label>Location</label>
            <input id="school"></input>
          </div>
        </div>
        <div className="flex">
          <div>
            <label>Start Date</label>
            <input id="startDate"></input>
          </div>
          <div>
            <label>End Date</label>
            <input id="endDate"></input>
          </div>
        </div>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default Education;
