const buttonChangeColorHTML = document.getElementById("buttonToChangeBackgroundColor");

buttonChangeColorHTML.addEventListener("click", () => {
  const randomColor = "#" + (Math.floor(Math.random() * 900000) + 100000);
  document.body.style.backgroundColor = randomColor;
});
