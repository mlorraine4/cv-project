import React from "react"
import EducationPreview from "./EducationPreview";
import PersonalPreview from "./PersonalPreview"

const CVMain = (props) => {
  const { cv } = props.props;
  const { education } = props.props;
  console.log(education);
  return (
    <div>
      <PersonalPreview cv={cv} />
      <EducationPreview education={education} />
    </div>
  );
}

export default CVMain;