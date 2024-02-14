const spansHTML = document.getElementsByTagName("span");

for (let index = 0; index < spansHTML.length; index++) {
    const span = spansHTML[index];
    span.style.fontStyle = "italic"
}
