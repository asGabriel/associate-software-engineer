const moveDivButtonHTML = document.getElementById("moveDivButton");

moveDivButtonHTML.addEventListener("click", () => {
  const divToMoveHTML = document.getElementById("animateDiv");

  divToMoveHTML.style.left === "100px"
    ? (divToMoveHTML.style.left = "0px")
    : (divToMoveHTML.style.left = "100px");
});
