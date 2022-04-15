const submitButton = document.getElementById("send-btn");
const clearForm = document.getElementById("clear-form");
const emailInput = document.querySelector(".email-input");
const messageInput = document.querySelector(".message-input");

const messageDisplay = document.querySelector(".messages");
const messageDisplayField = messageDisplay.querySelector(".message-text");

function getUserByEmail(email) {
  const userName = [];

  for (let letter of email) {
    if (letter === "@") {
      break;
    }
    userName.push(letter);
  }
  return userName.join("");
}

function isEmailValid(value) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(value);
}

function showMessage(error, message) {
  if (error) {
    messageDisplay.classList.add("error");
    messageDisplay.classList.remove("hidden");
    messageDisplayField.innerHTML = message;
  } else {
    messageDisplay.classList.remove("error");
    messageDisplay.classList.remove("hidden");
    messageDisplayField.innerHTML = `${message}, ${getUserByEmail(
      emailInput.value
    )}!`;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (emailInput.value !== "" && messageInput.value !== "") {
    if (isEmailValid(emailInput.value)) {
      showMessage(false, "Obrigado pelo contato");
    } else {
      showMessage(true, "Erro no envio: Endereço de mail inválido");
    }
  } else if (messageInput.value === "") {
    showMessage(true, "Erro no envio: Insira uma mensagem");
  } else {
    showMessage(true, "Erro no envio: Insira seu email");
  }
}

function handleClearMessage() {
  messageDisplay.classList.add("hidden");
}

submitButton.addEventListener("click", handleSubmit);
clearForm.addEventListener("click", handleClearMessage);
