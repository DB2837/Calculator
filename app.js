const clearBtn = document.querySelector("[data-value='clear']");
const deleteBtn = document.querySelector("[data-value='delete']");
const powBtn = document.querySelector("[data-value='^']");
const factorialBtn = document.querySelector("[data-value='!']");
const sevenBtn = document.querySelector("[data-value='7']");
const eightBtn = document.querySelector("[data-value='8']");
const nineBtn = document.querySelector("[data-value='9']");
const divideBtn = document.querySelector("[data-value='÷']");
const fourBtn = document.querySelector("[data-value='4']");
const fiveBtn = document.querySelector("[data-value='5']");
const sixBtn = document.querySelector("[data-value='6']");
const multiplyBtn = document.querySelector("[data-value='x']");
const oneBtn = document.querySelector("[data-value='1']");
const twoBtn = document.querySelector("[data-value='2']");
const threeBtn = document.querySelector("[data-value='3']");
const minusBtn = document.querySelector("[data-value='-']");
const zeroBtn = document.querySelector("[data-value='0']");
const pointBtn = document.querySelector("[data-value='.']");
const equalBtn = document.querySelector("[data-value='=']");
const plusBtn = document.querySelector("[data-value='+']");
const calculatorDisplay = document.querySelector("#screen");
const calculatorDisplayTop = document.querySelector("#screen-top");
const calculatorDisplayBottom = document.querySelector("#screen-bottom");

let displayTopExpression = calculatorDisplayTop.textContent;
let displayBottomExpression = calculatorDisplayBottom.textContent;

const regPattern = /(^\d{1,6}\D\d{1,6}$)/;
let isValid = false;

clearBtn.addEventListener("click", () => {
  clearScreen();
});

factorialBtn.addEventListener("click", () => {
  console.log(factorial(a));
});

powBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += `${powBtn.getAttribute("data-value")}`;
  displayTopExpression = calculatorDisplayTop.textContent;
  console.log(displayBottomExpression);
  console.log(displayTopExpression);
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

plusBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += `${plusBtn.getAttribute("data-value")}`;
  displayTopExpression = calculatorDisplayTop.textContent;
  console.log(displayBottomExpression);
  console.log(displayTopExpression);
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

minusBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += `${minusBtn.getAttribute("data-value")}`;
  displayTopExpression = calculatorDisplayTop.textContent;
  console.log(displayBottomExpression);
  console.log(displayTopExpression);
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

multiplyBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += `${multiplyBtn.getAttribute(
    "data-value"
  )}`;
  displayTopExpression = calculatorDisplayTop.textContent;
  console.log(displayBottomExpression);
  console.log(displayTopExpression);
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

divideBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += `${divideBtn.getAttribute("data-value")}`;
  displayTopExpression = calculatorDisplayTop.textContent;
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

pointBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += `${pointBtn.getAttribute("data-value")}`;
  displayTopExpression = calculatorDisplayTop.textContent;
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

equalBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += `${equalBtn.getAttribute("data-value")}`;
  displayTopExpression = calculatorDisplayTop.textContent;
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

zeroBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += "0";
  displayTopExpression = calculatorDisplayTop.textContent;
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

oneBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += "1";
  displayTopExpression = calculatorDisplayTop.textContent;
  console.log(displayBottomExpression);
  console.log(displayTopExpression);
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

twoBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += "2";
  displayTopExpression = calculatorDisplayTop.textContent;
  console.log(displayBottomExpression);
  console.log(displayTopExpression);
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

threeBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += "3";
  displayTopExpression = calculatorDisplayTop.textContent;
  console.log(displayBottomExpression);
  console.log(displayTopExpression);
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

fourBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += "4";
  displayTopExpression = calculatorDisplayTop.textContent;
  console.log(displayBottomExpression);
  console.log(displayTopExpression);
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

fiveBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += "5";
  displayTopExpression = calculatorDisplayTop.textContent;
  console.log(displayBottomExpression);
  console.log(displayTopExpression);
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

sixBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += "6";
  displayTopExpression = calculatorDisplayTop.textContent;
  console.log(displayBottomExpression);
  console.log(displayTopExpression);
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

sevenBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += "7";
  displayTopExpression = calculatorDisplayTop.textContent;
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

eightBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += "8";
  displayTopExpression = calculatorDisplayTop.textContent;
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

nineBtn.addEventListener("click", () => {
  calculatorDisplayTop.textContent += "9";
  displayTopExpression = calculatorDisplayTop.textContent;
  isValid = regPattern.test(displayTopExpression);
  console.log(isValid);
});

/* console.log(deleteBtn);
console.log(clearBtn.getAttribute("data-value"));
console.log(deleteBtn.getAttribute("data-value")); */

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const power = (a, b) => Math.pow(a, b);

const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result = result * i;
  }

  return result;
};

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "x":
      return multiply(a, b);
      break;
    case "÷":
      return divide(a, b);
      break;
    case "^":
      return power(a, b);
      break;
  }
}

function clearScreen() {
  calculatorDisplayBottom.textContent = "";
  displayBottomExpression = calculatorDisplayTop.textContent;
  calculatorDisplayTop.textContent = "";
  displayTopExpression = calculatorDisplayTop.textContent;
}

/* console.log(operate(9, 4, "^"));
console.log(operate(12, 4, "x"));
console.log(operate(9, 2, "÷"));
console.log(operate(9, 55, "+")); */
