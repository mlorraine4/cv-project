import React from "react";
import mail from "../../images/mail.png";
import phone from "../../images/telephone.png"

const PersonalPreview = ({cv}) => {
    return (
      <div>
        <div className="personalHeader">Contact Info</div>
        <div className="flex personalItem">
          <img className="icon" src={mail}></img>
          <div className="email">{cv.email}</div>
        </div>
        <div className="flex personalItem">
          <img className="icon" src={phone}></img>
          <div className="phoneNumber">{cv.phoneNumber}</div>
        </div>
      </div>
    );
}

export default PersonalPreview;