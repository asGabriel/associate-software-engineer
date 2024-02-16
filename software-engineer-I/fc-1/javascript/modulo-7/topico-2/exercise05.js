const ulHTML = document.getElementById("itemList");

const addItemButtonHTML = document.getElementById("addItemButton");

addItemButton.addEventListener("click", () => {
  addListItemToUnorderedList(ulHTML);
});

function addListItemToUnorderedList(ulHTML) {
  const newItemListHTML = document.createElement("li");
  newItemListHTML.textContent = "Item list added by button click";
  ulHTML.append(newItemListHTML);
}
