const pHTML = document.getElementById("hoverText");

pHTML.addEventListener("mouseover", () => {
    pHTML.style.color = "red",
    pHTML.style.fontFamily = "'Courier New', Courier, monospace"
})

pHTML.addEventListener("mouseout", () => {
    pHTML.style.color = "black"
    pHTML.style.fontFamily = "Arial, Helvetica, sans-serif"
})
