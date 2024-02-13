const inputHTML = document.getElementById("eventKeyPress");

inputHTML.addEventListener("keydown", (key) => {
  if (key.key === "Enter") {
    alert("You press Enter");
  }
});
