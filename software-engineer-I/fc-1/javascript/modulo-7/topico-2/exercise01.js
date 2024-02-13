const paragraphToChangeHTML = document.getElementById("paragraph");

const changeButtoHTML = document.getElementById("alterTextButton");

changeButtoHTML.addEventListener("click", () => {
    paragraphToChangeHTML.textContent = "The click on the button 'alterar texto' has changed this text."
});
