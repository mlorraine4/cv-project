import React from "react";

const Personal = ({ handleSubmit, validatePhone, validateEmail }) => {
  return (
    <div className="subForm">
      <form onSubmit={handleSubmit}>
        <div className="formTitle">Personal Information</div>
        <div className="flex">
          <div>
            <label>First Name</label>
            <input name="firstName" id="firstName" type="text"></input>
            <div className="placeHolder">
              *Please enter a valid email address
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <input name="lastName" id="lastName" type="text"></input>
            <div className="placeHolder">
              *Please enter a 10-digit phone number
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <label>E-mail</label>
            <input
              name="email"
              id="email"
              type="email"
              onChange={validateEmail}
            ></input>
            <div className="emailError">
              *Please enter a valid email address
            </div>
          </div>
          <div>
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              id="phoneNumber"
              onChange={validatePhone}
              type="text"
            ></input>
            <div className="phoneError">
              *Please enter a 10-digit phone number
            </div>
          </div>
        </div>
        <input type="submit" value="update"></input>
        <div className="personalEmpty formError">*All fields are required</div>
      </form>
    </div>
  );
};

export default Personal;
