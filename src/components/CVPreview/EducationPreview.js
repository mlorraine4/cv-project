import React from "react";

const EducationPreview = (props) => {
    const { educationArray } = props;
    return (
      <div className="cvComponent">
        <div className="cvHeader">Education</div>
        {educationArray.map((education) => {
          return (
            <div className="educationItem" key={education.id}>
              <div className="educationDates">
                {education.startDate} - {education.endDate}
              </div>
              <div className="school">{education.school}</div>
              <div className="degree">{education.degree}</div>
              <div className="educationLocation">{education.location}</div>
            </div>
          );
        })}
      </div>
    );
};

export default EducationPreview;
