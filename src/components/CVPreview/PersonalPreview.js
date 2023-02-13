import React from "react";

const PersonalPreview = (props) => {
    console.log(props);
    const cv = props.cv;
    const fullName = cv.firstName + " " + cv.lastName;

    return(
        <div>
            <div className="fullName">{ fullName }</div>
            <div className="email">{ cv.email }</div>
            <div className="phoneNumber">{ cv.phoneNumber }</div>
        </div>
    )
}

export default PersonalPreview;