const buttonMinus = document.querySelector("#button-minus");
const resultBlock = document.querySelector("#result");
const counterAdd = document.getElementById("button-plus");



let number = 0;

resultBlock.textContent = number;

const counterPlus = () => {
  number++;
  resultBlock.textContent = number;
};
counterAdd.addEventListener("click",counterPlus)
const counterMinus = () => {
  number--;
  resultBlock.textContent = number;
};

buttonMinus.addEventListener("click", counterMinus);