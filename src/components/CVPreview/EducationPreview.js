import React from "react";

const EducationPreview = (props) => {
  const { educationArray } = props;
  return (
    <div className="cvComponent">
      <div className="cvHeader">EDUCATION</div>
      {educationArray.map((education) => {
        return (
          <div className="educationItem" key={education.id}>
            <div className="flex space">
              <div className="degree">{education.degree}</div>
              <div className="educationDates">
                {education.startDate} - {education.endDate}
              </div>
            </div>
            <div className="school">
              {education.school}, {education.location}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationPreview;
