const paragraphHTML = document.getElementById("hoverText");

const OVER_COLOR = "red";
const OUT_COLOR = "black";
const OVER_FONT_FAMILY = "'Courier New', Courier, monospace";
const OUT_FONT_FAMILY = "Arial, Helvetica, sans-serif";

paragraphHTML.addEventListener("mouseover", () => {
  toggleStyleOnMouseOverOrOut(paragraphHTML, OVER_COLOR, OVER_FONT_FAMILY);
});

paragraphHTML.addEventListener("mouseout", () => {
  toggleStyleOnMouseOverOrOut(paragraphHTML, OUT_COLOR, OUT_FONT_FAMILY);
});

function toggleStyleOnMouseOverOrOut(paragraphHTML, color, fontFamily) {
  paragraphHTML.style.color = color;
  paragraphHTML.style.fontFamily = fontFamily;
}
