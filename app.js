const clearBtn = document.querySelector("[data-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const equalBtn = document.querySelector("[data-equal]");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const previusNumber = document.querySelector("[data-previus-number]");
const currentNumber = document.querySelector("[data-current-number]");

currentNumber.textContent = "";
previusNumber.textContent = "";

clearBtn.addEventListener("click", () => {
  clearScreen();
});

deleteBtn.addEventListener("click", () => {
  removeDigit();
});

function numberFilter(string) {
  const myNumber = string.split(" ");
  return myNumber[0];
}

function operatorFilter(string) {
  const myOperator = string.split(" ");
  return myOperator[1];
}

function powFilterLeft(string) {
  const powIndex = string.indexOf("^");
  const leftNumber = string.slice(0, powIndex);

  return leftNumber;
}

function removeDigit() {
  const newNumber = currentNumber.textContent.slice(0, -1);
  currentNumber.textContent = newNumber;
}

function clearScreen() {
  currentNumber.textContent = "";
  previusNumber.textContent = "";
}

function appendNumber(num) {
  if (num === "." && currentNumber.textContent.includes(".")) return;
  else currentNumber.textContent += num.toString();
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      currentNumber.textContent != "" &&
      previusNumber.textContent != "" &&
      currentNumber.textContent.includes("^")
    ) {
      console.log(powFilterLeft(currentNumber.textContent));
      let powResult = operate(
        powFilterLeft(currentNumber.textContent),
        button.dataset.number,
        "^"
      );
      currentNumber.textContent = powResult;
      return;
    }
    appendNumber(button.dataset.number);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentNumber.textContent == "." || currentNumber.textContent == "-") {
      return;
    } else if (button.dataset.operator == "!") {
      let factorialResult = operate(currentNumber.textContent, 0, "!");
      currentNumber.textContent = factorialResult;
    } else if (
      button.dataset.operator == "-" &&
      currentNumber.textContent == ""
    ) {
      currentNumber.textContent += "-";
    } else if (
      button.dataset.operator == "-" &&
      currentNumber.textContent == "-"
    ) {
      return;
    } else if (
      currentNumber.textContent != "" &&
      currentNumber.textContent != "-" &&
      previusNumber.textContent != "" &&
      !currentNumber.textContent.includes("^") &&
      button.dataset.operator == "^"
    ) {
      currentNumber.textContent += "^";
    } else if (
      currentNumber.textContent == "-" &&
      previusNumber.textContent != "" &&
      !currentNumber.textContent.includes("^") &&
      button.dataset.operator == "^"
    ) {
      return;
    } else if (
      currentNumber.textContent != "" &&
      previusNumber.textContent != "" &&
      currentNumber.textContent.includes("^") &&
      button.dataset.operator == "^"
    ) {
      return;
    } else if (
      currentNumber.textContent != "" &&
      previusNumber.textContent != ""
    ) {
      let result = operate(
        numberFilter(previusNumber.textContent),
        currentNumber.textContent,
        operatorFilter(previusNumber.textContent)
      );
      previusNumber.textContent = result + " " + `${button.dataset.operator}`;
      currentNumber.textContent = "";
    } else if (currentNumber.textContent != "") {
      previusNumber.textContent =
        currentNumber.textContent + " " + `${button.dataset.operator}`;
      currentNumber.textContent = "";
    }
  });
});

equalBtn.addEventListener("click", () => {
  if (currentNumber.textContent == "" && previusNumber.textContent != "") {
    return;
  } else if (
    currentNumber.textContent !== "" &&
    previusNumber.textContent == ""
  ) {
    return;
  }
  let result = operate(
    numberFilter(previusNumber.textContent),
    currentNumber.textContent,
    operatorFilter(previusNumber.textContent)
  );

  currentNumber.textContent = result;
  previusNumber.textContent = "";
});

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b == 0) {
    return "division by 0 not allowed!";
  } else if (a % b == 0) {
    return a / b;
  }

  return a / b;
};

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
      return Math.round(add(+a, +b) * 100) / 100;
      break;
    case "-":
      return Math.round(subtract(+a, +b) * 100) / 100;
      break;
    case "x":
      return Math.round(multiply(+a, +b) * 100) / 100;
      break;
    case "÷":
      return Math.round(divide(+a, +b) * 100) / 100;
      break;
    case "^":
      return Math.round(power(+a, +b) * 100) / 100;
      break;
    case "!":
      b = 0;
      return Math.round(factorial(+a) * 100) / 100;
      break;
    default:
      return;
  }
}
