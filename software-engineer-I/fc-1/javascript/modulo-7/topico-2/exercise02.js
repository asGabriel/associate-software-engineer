const ocultableDivHTML = document.getElementById("toggleDiv");

const buttonHTML = document.getElementById("buttonToHiddenToggleDiv");

buttonHTML.addEventListener("click", () => {
  if (
    ocultableDivHTML.style.width === "100px" &&
    ocultableDivHTML.style.height === "100px"
  ) {
    ocultableDivHTML.style.width = "0px";
    ocultableDivHTML.style.height = "0px";
    ocultableDivHTML.textContent = "";
} else {
    ocultableDivHTML.style.width = "100px";
    ocultableDivHTML.style.height = "100px";
    ocultableDivHTML.textContent = "Div Ocultável";
  }
});
