console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  event.preventDefault();
  const newToastContainer = document.createElement("li");
  newToastContainer.classList.add("toast-container__message");
  newToastContainer.textContent = "I'm another toast message.";

  toastContainer.append(newToastContainer);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  event.preventDefault();

  toastContainer.innerHTML = "";
});
