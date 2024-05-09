let expression = "";
let lastOperator = "";
const allButonsElm = document.querySelectorAll(".cbtn");
const displayElm = document.querySelector(".d");
const audio = new Audio("./assets/ad.mp3");

const operators = ["%", "/", "*", "-", "+"];

const btnAction = (value) => {
  displayElm.classList.remove("prank");
  if (value === "AC") {
    expression = "";
    return display(expression);
  }

  if (value === "C") {
    expression = expression.slice(0, -1);
    return display(expression);
  }

  if (value === "=") {
    lastOperator = "";
    const lastCh = expression[expression.length - 1];
    if (operators.includes(lastCh)) {
      expression = expression.slice(0, -1);
    }
    return calExp();
  }

  if (operators.includes(value)) {
    lastOperator = value;
    const lastCh = expression[expression.length - 1];
    if (operators.includes(lastCh)) {
      expression = expression.slice(0, -1);
    }
  }

  if (value === ".") {
    const indexOfLastOperator = expression.lastIndexOf(lastOperator);

    const lastNumberSet = expression.slice(indexOfLastOperator);

    if (lastNumberSet.includes(".")) {
      return;
    }

    if (!lastOperator && expression.includes(".")) {
      return;
    }
  }

  expression += value;
  display(expression);
};

allButonsElm.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.scale = ".9";
  });
  btn.addEventListener("click", () => {
    btn.style.scale = "1";
    const value = btn.innerText;
    btnAction(value);
  });
});

const display = (str) => {
  displayElm.innerText = str || 0.0;
};

const calExp = () => {
  const prankVal = rValue();

  if (prankVal) {
    displayElm.classList.add("prank");
    audio.play();
  }

  const calc = eval(expression) + prankVal;
  expression = calc.toString();
  display(expression);
};

const rValue = () => {
  const n = Math.round(Math.random() * 10);
  return n < 9 ? n : 0;
};
