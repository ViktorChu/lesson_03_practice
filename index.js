const resultBlock = document.querySelector("#result");
const plusButton = document.querySelector("#button-plus");

let counter = 0;

plusButton.addEventListener("click", () => {
  counter++;
  resultBlock.textContent = counter;
});
