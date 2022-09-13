const container = document.querySelector(".container");
const closeButton = document.querySelector(".section-close-button");
const controlSections = [...document.querySelectorAll(".control-section")];

container.addEventListener("click", e => {
  const clickedSection = e.target.closest(".section-control");
  clickedSection.classList.add("active");
  const icon = e.target.previousElementSibling;
  icon.addEventListener("click", e => {
    e.stopImmediatePropagation();
    console.log(e.target.parentElement);
    const clickedSection = e.target.parentElement;
    clickedSection.classList.remove("active");

    // clickedSection.style.transition = "none";
  });
});
