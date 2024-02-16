const inputHTML = document.getElementById("eventKeyPress");

inputHTML.addEventListener("keydown", ({ key }) => {
  if (key === "Enter") {
    alert("You press Enter");
  }
});
