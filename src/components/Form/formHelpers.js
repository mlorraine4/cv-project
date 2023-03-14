import * as htmlToImage from "html-to-image";
import { jsPDF } from "jspdf";

function openCVEdit() {
  document.querySelector(".cvEdit").style.display = "flex";
  document.querySelector(".cvExample").style.display = "none";
  document.querySelector(".cvMain").style.display = "block"
}

function formatPhone(phoneNumber) {
  let format =
    "(" +
    phoneNumber.slice(0, 3) +
    ")" +
    " " +
    phoneNumber.slice(3, 6) +
    "-" +
    phoneNumber.slice(6, 10);
  return format;
}

function validatePersonal(target) {
  if (target.firstName.value === "" || target.lastName.value === "") {
    document.querySelector(".personalEmpty").style.opacity = "1";
    return false;
  } else return true;
}

function validateEducation(target) {
  if (
    target.degree.value === "" ||
    target.school.value === "" ||
    target.location.value === "" ||
    target.startDate.value === "" ||
    target.endDate.value === ""
  ) {
    document.querySelector(".educationEmpty").style.opacity = "1";
    return false;
  } else return true;
}

function validateExperience(target) {
  if (
    target.jobTitle.value === "" ||
    target.company.value === "" ||
    target.location.value === "" ||
    target.startDate.value === "" ||
    target.endDate.value === ""
  ) {
    document.querySelector(".experienceEmpty").style.opacity = "1";
    return false;
  } else return true;
}

function validateSkills(target) {
  if (target.skill.value === "") {
    document.querySelector(".skillsEmpty").style.opacity = "1";
    return false;
  } else return true;
}

function clearFormErrors() {
  document.querySelector(".phoneError").style.opacity = "0";
  document.querySelector(".emailError").style.opacity = "0";
  document.querySelector(".formError").style.opacity = "0";
  document.querySelector(".educationEmpty").style.opacity = "0";
  document.querySelector(".skillsEmpty").style.opacity = "0";
  document.querySelector(".personalEmpty").style.opacity = "0";
}

function openEdit(formName) {
  if (document.querySelector(".edit" + formName) !== null) {
    document.querySelector(".edit" + formName).style.display = "block";
  }
}

function closeEdit(formName) {
  if (document.querySelector(".edit" + formName) !== null) {
    document.querySelector(".edit" + formName).style.display = "none";
  }
}

function closeTaskForm() {
  document.querySelector(".main").style.opacity = "1";
  document.querySelector(".taskForm").style.display = "none";
}

function downloadPDF() {

  htmlToImage
    .toPng(document.querySelectorAll(".cv")[1], { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
}

export {
  openCVEdit,
  formatPhone,
  validatePersonal,
  validateEducation,
  validateExperience,
  validateSkills,
  clearFormErrors,
  openEdit,
  closeEdit,
  closeTaskForm,
  downloadPDF,
};
