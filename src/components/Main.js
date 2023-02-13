import React, { Component } from "react";
import CVMain from "./CVPreview/CVMain";
import Form from "./Form/Form";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      cv: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
      education: {
        degree: "",
        school: "",
        startDate: "",
        endDate: "",
      },
      educationArray: [],
      experience: {
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
      },
      experienceArray: [],
    };
  }

  handleChangePersonal = (e) => {
    e.preventDefault();
    this.setState({
      cv: {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
      },
    });
  };

  handleChangeEducation = (e) => {
    e.preventDefault();
    this.setState({
      education: {
        degree: e.target.degree.value,
        school: e.target.school.value,
        startDate: e.target.startDate.value,
        endDate: e.target.endDate.value,
      },
    });
  };

  handleChangeExperience = (e) => {
    e.preventDefault();
    this.setState({
      experience: {
        jobTitle: e.target.jobTitle.value,
        company: e.target.company.value,
        startDate: e.target.startDate.value,
        endDate: e.target.endDate.value,
      },
    });
  }

  render() {
    return (
      <div>
        <Form
          props={this.state}
          handleChangeEducation={this.handleChangeEducation}
          handleChangePersonal={this.handleChangePersonal}
        />
        <CVMain props={this.state} />
      </div>
    );
  }
}

export default Main;

// functions used before:
// handleChangeEducation = (e) => {
//     const { id, value } = e.target;
//     this.setState((prevState) => ({
//       education: {
//         ...prevState.education,
//         [id]: value,
//       },
//     }));