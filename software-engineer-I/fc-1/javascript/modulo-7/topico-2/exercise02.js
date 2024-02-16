const ocultableDivHTML = document.getElementById("toggleDiv");

const buttonHTML = document.getElementById("buttonToHiddenToggleDiv");

buttonHTML.addEventListener("click", () => {
  showOrHiddenHTMLElement(
    ocultableDivHTML
  );
});

function showOrHiddenHTMLElement(elementHTML) {
  if (
    elementHTML.style.width === "100px" &&
    elementHTML.style.height === "100px"
  ) {
    elementHTML.style.width = "0px";
    elementHTML.style.height = "0px";
    elementHTML.textContent = "";
  } else {
    elementHTML.style.width = "100px";
    elementHTML.style.height = "100px";
    elementHTML.textContent = "Div Ocultável";
  }
}
