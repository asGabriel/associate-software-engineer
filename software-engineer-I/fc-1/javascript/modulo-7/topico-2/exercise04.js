const sendFormButtonHTML = document.getElementById("sendFormButton");

const FAIL_MESSAGE = "The email field is empty. Please fill it out.";
const SUCCESS_MESSAGE = "Form has been successfully sent";

sendFormButton.addEventListener("click", () => {
  const emailInputHTML = document.getElementById("emailInput");

  checkIfInputIsEmpty(emailInputHTML, SUCCESS_MESSAGE, FAIL_MESSAGE);
});

function checkIfInputIsEmpty(inputHTML, successMessage, failedMessage) {
  inputHTML.value.length === 0 ? alert(failedMessage) : alert(successMessage);
}
