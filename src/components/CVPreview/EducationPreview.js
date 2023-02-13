import React from "react";

const EducationPreview = (props) => {
  console.log(props);
  const { education  } = props;
  console.log( education );
  return (
    <div>
      <div className="degree">{education.degree}</div>
      <div className="location">{education.location}</div>
      <div className="startDate">{education.startDate}</div>
      <div className="endDate">{education.endDate}</div>
    </div>
  );
};

export default EducationPreview;
