import React from "react";

const PersonalPreview = ({cv}) => {
    return (
      <div>
        <div className="cvHeader">Contact Info</div>
        <div className="contactHeader">Email</div>
        <div className="email">{cv.email}</div>
        <div className="contactHeader">Phone Number</div>
        <div className="phoneNumber">{cv.phoneNumber}</div>
      </div>
    );
}

export default PersonalPreview;