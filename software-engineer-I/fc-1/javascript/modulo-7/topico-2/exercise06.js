const spanHTML = document.getElementById("clickCounter");

const clickCounterButton = document.getElementById("clickCounterButton");

clickCounterButton.addEventListener("click", () => {
  spanHTML.textContent = Number(spanHTML.textContent) + 1;
});
