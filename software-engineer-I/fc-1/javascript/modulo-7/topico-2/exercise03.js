const buttonChangeColorHTML = document.getElementById("buttonToChangeBackgroundColor");

buttonChangeColorHTML.addEventListener("click", () => {
  document.body.style.backgroundColor = generateRandomHashColor();
});

function generateRandomHashColor() {
  return "#" + (Math.floor(Math.random() * 900000) + 100000);
}
