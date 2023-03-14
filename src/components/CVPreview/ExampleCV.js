import { Component } from "react";
import CVMain from "./CVMain";
import uniqid from "uniqid";

class ExampleCV extends Component {
  constructor() {
    super();
    this.state = {
      cv: {
        firstName: "Maria",
        lastName: "Silvia",
        email: "maria.silvia@gmail.com",
        phoneNumber: "(555) 555-555",
      },
      education: {
        degree: "Biological Anthropology",
        school: "Pennsylvania State University",
        startDate: "August 2013",
        endDate: "August 2017",
        location: "University Park, PA",
        id: uniqid(),
      },
      educationArray: [
        {
          degree: "B.S. in Biological Anthropology",
          school: "Pennsylvania State University",
          startDate: "August 2013",
          endDate: "August 2017",
          location: "University Park, PA",
          id: uniqid(),
        },
      ],
      experience: {
        jobTitle: "Crew Member",
        company: "Trader Joe's",
        location: "Annapolis, MD",
        startDate: "November 2017",
        endDate: "September 2022",
        id: uniqid(),
      },
      experienceArray: [
        {
          jobTitle: "Crew Member",
          company: "Trader Joe's",
          location: "Annapolis, MD",
          startDate: "November 2017",
          endDate: "September 2022",
          id: 1,
        },
      ],
      skills: {
        text: "",
        id: uniqid(),
      },
      skillsArray: [
        {
          text: "Web Development",
          id: uniqid(),
        },
        {
          text: "Customer Service",
          id: uniqid(),
        },
        { text: "Data Entry", id: uniqid() },
      ],
      task: "",
      taskArray: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          key: 1,
          id: uniqid(),
        },
        {
          text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          key: 1,
          id: uniqid(),
        },
        {
          text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          key: 1,
          id: uniqid(),
        },
        {
          text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          key: 1,
          id: uniqid(),
        },
      ],
    };
  }
  render() {
    return <CVMain props={this.state} />;
  }
}

export default ExampleCV;
