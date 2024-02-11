const itensHTML = document.querySelectorAll(".item");

console.log(itensHTML);
for (let index = 0; index < itensHTML.length; index++) {
    const item = itensHTML[index];
    item.style.backgroundColor = "blue"
}