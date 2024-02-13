const spanHTML = document.getElementById("clickCounter");

const clickCounterButton = document.getElementById("clickCounterButton");

clickCounterButton.addEventListener("click", () => {
  console.log(spanHTML.textContent);
  spanHTML.textContent = Number(spanHTML.textContent) + 1;
});
