const ulHTML = document.getElementById("itemList");

const addItemButtonHTML = document.getElementById("addItemButton");

addItemButton.addEventListener("click", () => {
  const newItemListHTML = document.createElement("li");
  newItemList.textContent = "Item list added by button click";
  ulHTML.append(newItemList);
});
