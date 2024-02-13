const sendFormButtonHTML = document.getElementById("sendFormButton");

sendFormButton.addEventListener("click", () => {
  const emailInputHTML = document.getElementById("emailInput");
  if (emailInputHTML.value.length === 0) {
    alert("The email field is empty. Please fill it out.");
  } else {
    alert("Form has been succesfully sent");
  }
});
