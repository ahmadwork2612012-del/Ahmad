const btnProjects = document.getElementById("btnProjects");
const btnContact = document.getElementById("btnContact");
const projectsSection = document.getElementById("projectsSection");
const contactSection = document.getElementById("contactSection");

btnProjects.addEventListener("click", () => {
  if (
    projectsSection.style.display === "none" ||
    projectsSection.style.display === ""
  ) {
    projectsSection.style.display = "flex";
    projectsSection.scrollIntoView({ behavior: "smooth" });
  } else {
    projectsSection.style.display = "none";
  }
});

btnContact.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
