const buttonMinus = document.querySelector("#button-minus");
const resultBlock = document.querySelector("#result");

let number = 0;
resultBlock.textContent = number;

const counterMinus = () => {
  number--;
  resultBlock.textContent = number;
};

buttonMinus.addEventListener("click", counterMinus);
