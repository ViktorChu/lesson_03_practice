const counterAdd = document.querySelector("#counter");
const plusButton = document.querySelector("#button-plus");

let counter = 0;

plusButton.addEventListener("click", () => {
  counter++;
  counterAdd.textContent = counter;
});
