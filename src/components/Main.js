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
  openCVEdit,
} from "./Form/formHelpers";
import ExampleCV from "./CVPreview/ExampleCV";
import { OpenEditButtons } from "./Form/EditForm";
import { ExperienceTasks } from "./Form/Experience";

// TODO: add edits for personal, experience, skills
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
        location: "",
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
      task: {
        text: "",
        key: "",
        id: uniqid(),
      },
      taskArray: [],
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
        closeEdit("Education");
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
        closeEdit("Experience");
      }
    }, 10);
  };

  handleChangeExperienceTask = (e) => {
    const { id, value } = e.target;
    let radio = document.getElementsByName("job");
    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        this.setState({
          task: {
            text: e.target.value,
            key: radio[i].getAttribute("data-key"),
            id: this.state.task.id,
          },
        });
      }
    }
  };

  handleSubmitExperienceTask = (e) => {
    e.preventDefault();
    this.setState({
      taskArray: [...this.state.taskArray, this.state.task],
      task: {
        text: "",
        key: "",
        id: uniqid(),
      },
    });
  };

  // SKILLS
  handleChangeSkills = (e) => {
    this.setState({
      skills: {
        text: e.target.value,
        id: this.state.skills.id,
      },
    });
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

  checkCompleted = (e) => {
    // TODO: write fnc
  }
// TODO: make edit a pop up, and main faded and unclickable unitl press update or x
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

  openTaskForm = (e) => {
    console.log(this.state.experienceArray.length);
    // 1. fade document, pop up task form on top of screen
    if (this.state.experienceArray.length !== 0) {
    document.querySelector(".main").style.opacity = "0.5";
    document.querySelector(".taskForm").style.display = "block";
    }
  };

  render() {
    return (
      <div>
        <ExperienceTasks
          handleChange={this.handleChangeExperienceTask}
          handleSubmit={this.handleSubmitExperienceTask}
          experienceArray={this.state.experienceArray}
        />
        <div className="main">
          <div className="cvExample">
            <div className="exampleText">Example CV</div>
            <ExampleCV />
            <button className="create" onClick={openCVEdit}>Create Your CV</button>
          </div>
          <div className="cvEdit">
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
              handleDeleteSkills={this.handleDeleteSkills}
              handleDeleteEducation={this.handleDeleteEducation}
              handleDeleteExperience={this.handleDeleteExperience}
              handleSubmitExperienceTask={this.handleSubmitExperienceTask}
              handleChangeExperienceTask={this.handleChangeExperienceTask}
            />
            <OpenEditButtons
              openEditEducation={this.openEditEducation}
              openEditExperience={this.openEditExperience}
              openEditSkills={this.openEditSkills}
              openTaskForm={this.openTaskForm}
            />
          </div>
          <div className="cvMain">
            <CVMain props={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

// icons:
// {
//   /* <a href="https://www.flaticon.com/free-icons/email" title="email icons">
//   Email icons created by Freepik - Flaticon
// </a>; 

// <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">Phone icons created by Gregor Cresnar - Flaticon</a>*/
// <a
//   href="https://www.flaticon.com/free-icons/bullet-point"
//   title="bullet point icons"
// >
//   Bullet point icons created by Freepik - Flaticon
// </a>;
// }
