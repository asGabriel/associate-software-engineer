const emphasisClassHTML = document.getElementsByClassName("destaque");

for (let index = 0; index < emphasisClassHTML.length; index++) {
  const emphasis = emphasisClassHTML[index];
  emphasis.style.backgroundColor = "yellow";
}
