const renderList = (list) => {
  listNode.innerHTML = "";
  if (!list) return;

  list.forEach((item) => {
    createListNode(item);
  });
};

const createListNode = (content) => {
  const li = document.createElement("li");
  li.textContent = content;
  listNode.appendChild(li);
  return listNode;
};

const clearInput = (inputNode) => {
  inputNode.value = "";
};

const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const addToArrayInLocalStorage = (key, value) => {
  const items = getFromLocalStorage(key);
  const newIt = items ? items : [];
  newIt.push(value);
  addToLocalStorage(key, newIt);
  return newIt;
};

const getFromLocalStorage = (key) => {
  const storage = localStorage.getItem(key);
  return JSON.parse(storage);
};

const inputNode = document.getElementById("input1");
const btnNode = document.getElementById("button1");
const listNode = document.getElementById("list1");

btnNode.addEventListener("click", () => {
  const value = inputNode.value;
  // chamar função que adiciona valor ao local storage
  const list = addToArrayInLocalStorage("inputs", value);
  renderList(list);
  clearInput(inputNode);
});

document.addEventListener("DOMContentLoaded", () => {
  // obter valores que estão no local storage
  const values = getFromLocalStorage("inputs");
  renderList(values);
});
