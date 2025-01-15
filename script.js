document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills");

  skillsSection.addEventListener("mouseover", () => {
    skillsSection.style.backgroundColor = "#f0f0f0";
  });

  skillsSection.addEventListener("mouseout", () => {
    skillsSection.style.backgroundColor = "transparent";
  });
});

skillsSection.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("skill-item")) {
    event.target.style.backgroundColor = "#f0f0f0";
  }
});

skillsSection.addEventListener("mouseout", (event) => {
  if (event.target.classList.contains("skill-item")) {
    event.target.style.backgroundColor = "transparent";
  }
});
