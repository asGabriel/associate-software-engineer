const emphasisItensHTML = document.getElementsByClassName("destaque");

for (let index = 0; index < emphasisItensHTML.length; index++) {
  const emphasis = emphasisItensHTML[index];
  emphasis.textContent = "Altered text on exercise08";
}
