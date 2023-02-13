import React from "react";
import Education from "./Education";
import Personal from "./Personal";

const Form = ({ handleChangeEducation, handleChangePersonal }) => {
    return (
      <div>
        <Personal handleChange = { handleChangePersonal }/>
        <Education handleChange = { handleChangeEducation }/>
      </div>
    );
}

export default Form;