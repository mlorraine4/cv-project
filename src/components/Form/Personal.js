import React from "react";

const Personal = ({ handleChange }) => {
    return (
      <div>
        <form onSubmit={handleChange}>
          <div className="personalTitle">Personal Information</div>
          <div className="flex">
            <div>
              <label>First Name</label>
              <input name="firstName" id="firstName"></input>
            </div>
            <div>
              <label>Last Name</label>
              <input name="lastName" id="lastName"></input>
            </div>
          </div>
          <div className="flex">
            <div>
              <label>E-mail</label>
              <input name="email" id="email" type="email"></input>
            </div>
            <div>
              <label>Phone Number</label>
              <input name="phoneNumber" id="phoneNumber"></input>
            </div>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    );
}

export default Personal;
