import React, { Component } from "react";
import CVMain from "./CVPreview/CVMain";
import Form from "./Form/Form";
import uniqid from "uniqid";
import {
  clearFormErrors,
  validateEducation,
  validateExperience,
  validateSkills,
  formatPhone,
  validatePersonal,
  closeEdit,
} from "./Form/formHelpers";

// empty state
// constructor() {
//     super();
//     this.state = {
//       cv: {
//         firstName: "",
//         lastName: "",
//         email: "",
//         phoneNumber: "",
//       },
//       education: {
//         degree: "",
//         school: "",
//         startDate: "",
//         endDate: "",
//         location: "",
//         id: uniqid(),
//       },
//       educationArray: [],
//       experience: {
//         jobTitle: "",
//         company: "",
//         location: "",
//         startDate: "",
//         endDate: "",
//         id: uniqid(),
//       },
//       experienceArray: [],
//       skills: {
//         text: "",
//         id: uniqid(),
//       },
//       skillsArray: [],
//     };
//   }
//TODO: add delete option for all edits
// TODO: add edits for personal, experience, skills
class Main extends Component {
  constructor() {
    super();
    this.state = {
      cv: {
        firstName: "Maria",
        lastName: "Silvia",
        email: "maria.lorraine.silvia4@gmail.com",
        phoneNumber: "",
      },
      education: {
        degree: "Biological Anthropology",
        school: "Penn State University",
        startDate: "August 2013",
        endDate: "August 2017",
        location: "University Park, PA",
        id: uniqid(),
      },
      educationArray: [],
      experience: {
        jobTitle: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      },
      experienceArray: [],
      skills: {
        text: "",
        id: uniqid(),
      },
      skillsArray: [],
    };
  }

  validatePhone() {
    let phone = document.getElementById("phoneNumber").value;
    let phoneRGEX = /^[0-9]{10}$/;
    let phoneResult = phoneRGEX.test(phone);
    if (phoneResult) {
      document.querySelector(".phoneError").style.opacity = "0";
      formatPhone(phone);
      return true;
    } else {
      document.querySelector(".phoneError").style.opacity = "1";
      return false;
    }
  }

  validateEmail() {
    let email = document.getElementById("email").value;
    let emailRGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let emailResult = emailRGEX.test(email);
    console.log(emailResult);
    if (emailResult) {
      document.querySelector(".emailError").style.opacity = "0";
      return true;
    } else {
      document.querySelector(".emailError").style.opacity = "1";
      return false;
    }
  }

  handleSubmitPersonal = (e) => {
    e.preventDefault();
    validatePersonal(e.target);
    if (
      this.validateEmail() &&
      this.validatePhone() &&
      validatePersonal(e.target)
    ) {
      clearFormErrors();
      this.setState({
        cv: {
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          email: e.target.email.value,
          phoneNumber: formatPhone(e.target.phoneNumber.value),
        },
      });
      e.target.reset();
    }
  };

  // EDUCATION
  handleChangeEducation = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [id]: value,
      },
    }));
  };

  handleEditEducation = (e) => {
    e.preventDefault();
    let targetKey = e.target.getAttribute("data-key");
    let educationArray = this.state.educationArray;
    if (validateEducation(e.target)) {
      clearFormErrors();
      for (let i = 0; i < educationArray.length; i++) {
        if (targetKey === educationArray[i].id) {
          this.setState(({ educationArray }) => ({
            educationArray: [
              ...educationArray.slice(0, i),
              {
                ...educationArray[i],
                degree: e.target.degree.value,
                school: e.target.school.value,
                startDate: e.target.startDate.value,
                endDate: e.target.endDate.value,
              },
              ...educationArray[i + 1],
            ],
          }));
        }
      }
    }
  };

  handleSubmitEducation = (e) => {
    e.preventDefault();
    if (validateEducation(e.target)) {
      clearFormErrors();
      this.setState({
        educationArray: [...this.state.educationArray, this.state.education],
        education: {
          degree: "",
          school: "",
          startDate: "",
          endDate: "",
          location: "",
          id: uniqid(),
        },
      });
      e.target.reset();
    }
  };

  handleDeleteEducation = (e) => {
    let educationArray = this.state.educationArray;
    let targetKey = e.target.getAttribute("data-key");
    for (let i = 0; i < educationArray.length; i++) {
      if (targetKey === educationArray[i].id) {
        this.setState(({ educationArray }) => ({
          educationArray: [
            ...educationArray.slice(0, i),
            ...educationArray.slice(i + 1),
          ],
        }));
      }
    }
    setTimeout(() => {
      let editList = document.querySelectorAll(".editEducationSub");
      if (editList.length === 0) {
        // TODO: close edit education fnc
      }
    }, 10);
  };

  // EXPERIENCE
  handleChangeExperience = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        [id]: value,
      },
    }));
  };

  handleSubmitExperience = (e) => {
    e.preventDefault();
    if (validateExperience(e.target)) {
      clearFormErrors();
      this.setState({
        experienceArray: [...this.state.experienceArray, this.state.experience],
        experience: {
          jobTitle: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          id: uniqid(),
        },
      });
      e.target.reset();
    }
  };

  handleEditExperience = (e) => {
    e.preventDefault();
    let targetKey = e.target.getAttribute("data-key");
    let experienceArray = this.state.experienceArray;
    if (validateExperience(e.target)) {
      clearFormErrors();
      for (let i = 0; i < experienceArray.length; i++) {
        if (targetKey === experienceArray[i].id) {
          this.setState(({ experienceArray }) => ({
            experienceArray: [
              ...experienceArray.slice(0, i),
              {
                ...experienceArray[i],
                jobTitle: e.target.jobTitle.value,
                company: e.target.company.value,
                location: e.target.location.value,
                startDate: e.target.startDate.value,
                endDate: e.target.endDate.value,
              },
              ...experienceArray.slice(i + 1),
            ],
          }));
        }
      }
    }
  };

  handleDeleteExperience = (e) => {
    let experienceArray = this.state.experienceArray;
    let targetKey = e.target.getAttribute("data-key");
    for (let i = 0; i < experienceArray.length; i++) {
      if (targetKey === experienceArray[i].id) {
        this.setState(({ experienceArray }) => ({
          experienceArray: [
            ...experienceArray.slice(0, i),
            ...experienceArray.slice(i + 1),
          ],
        }));
      }
    }
    setTimeout(() => {
      let editList = document.querySelectorAll(".editExperienceSub");
      if (editList.length === 0) {
        // TODO: close edit experience fnc
        closeEdit("Experience");
      }
    }, 10);
  };

  // SKILLS
  handleChangeSkills = (e) => {
    this.setState({
      skills: {
        text: e.target.value,
        id: this.state.skills.id,
      },
    });
    console.log(this.state.skills);
  };

  handleSubmitSkills = (e) => {
    e.preventDefault();
    if (validateSkills(e.target)) {
      clearFormErrors();
      this.setState({
        skillsArray: [...this.state.skillsArray, this.state.skills],
        skills: {
          text: "",
          id: uniqid(),
        },
      });
      e.target.reset();
    }
    console.log(this.state.skillsArray);
  };

  handleEditSkills = (e) => {
    e.preventDefault();
    console.log(e.target);
    let targetKey = e.target.getAttribute("data-key");
    let skillsArray = this.state.skillsArray;
    // TODO: write sep fnc for validating the edit (so the error mess pops for right form)
    if (validateSkills(e.target)) {
      clearFormErrors();
      for (let i = 0; i < skillsArray.length; i++) {
        if (targetKey === skillsArray[i].id) {
          this.setState(({ skillsArray }) => ({
            skillsArray: [
              ...skillsArray.slice(0, i),
              {
                ...skillsArray[i],
                text: e.target.skill.value,
              },
              ...skillsArray.slice(i + 1),
            ],
          }));
        }
      }
    }
    // TODO: reset form
    // TODO: close form
  };

  handleDeleteSkills = (e) => {
    let skillsArray = this.state.skillsArray;
    let targetKey = e.target.getAttribute("data-key");
    for (let i = 0; i < skillsArray.length; i++) {
      if (targetKey === skillsArray[i].id) {
        this.setState(({ skillsArray }) => ({
          skillsArray: [
            ...skillsArray.slice(0, i),
            ...skillsArray.slice(i + 1),
          ],
        }));
      }
    }
    setTimeout(() => {
      let editList = document.querySelectorAll(".editSkillsSub");
      if (editList.length === 0) {
        closeEdit("Skills");
      }
    }, 10);
  };

  openEditEducation = (e) => {
    if (this.state.educationArray.length !== 0) {
      document.querySelector(".editEducation").style.display = "block";
    }
  };

  openEditExperience = (e) => {
    if (this.state.experienceArray.length !== 0) {
      document.querySelector(".editExperience").style.display = "block";
    }
  };

  openEditSkills = (e) => {
    if (this.state.skillsArray.length !== 0) {
      document.querySelector(".editSkills").style.display = "block";
    }
  };

  render() {
    return (
      <div>
        <Form
          educationArray={this.state.educationArray}
          experienceArray={this.state.experienceArray}
          skillsArray={this.state.skillsArray}
          handleSubmitPersonal={this.handleSubmitPersonal}
          validateEmail={this.validateEmail}
          validatePhone={this.validatePhone}
          handleSubmitEducation={this.handleSubmitEducation}
          handleChangeEducation={this.handleChangeEducation}
          handleEditEducation={this.handleEditEducation}
          handleSubmitExperience={this.handleSubmitExperience}
          handleChangeExperience={this.handleChangeExperience}
          handleEditExperience={this.handleEditExperience}
          handleChangeSkills={this.handleChangeSkills}
          handleSubmitSkills={this.handleSubmitSkills}
          handleEditSkills={this.handleEditSkills}
          openEditSkills={this.openEditSkills}
          handleDeleteSkills={this.handleDeleteSkills}
          handleDeleteEducation={this.handleDeleteEducation}
          handleDeleteExperience={this.handleDeleteExperience}
          openEditEducation={this.openEditEducation}
          openEditExperience={this.openEditExperience}
        />
        <CVMain props={this.state} />
      </div>
    );
  }
}

export default Main;
