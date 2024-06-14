import React, { useEffect, useState } from "react";
const audio = new Audio("./assets/ad.mp3");

export const Calculator = () => {
  let [expression, setExpression] = useState("");
  let lastOperator = "";
  const operators = ["%", "/", "*", "-", "+"];

  const handleOnClick = (e) => {
    btnAction(e);
  };

  const btnAction = (value) => {
    //displayElm.classList.remove("prank");
    if (value === "AC") {
      expression = "";
      return setExpression(expression);
    }

    if (value === "C") {
      expression = expression.slice(0, -1);
      return setExpression(expression);
    }

    if (value === "=" || value === "Enter") {
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
    setExpression(expression);
  };

  const calExp = () => {
    const prankVal = rValue();
    /*
    if (prankVal) {
      displayElm.classList.add("prank");
      audio.play();
    }

    const calc = eval(expression) + prankVal;*/
    const calc = eval(expression);
    expression = calc.toString();
    setExpression(expression);
  };

  const rValue = () => {
    const n = Math.round(Math.random() * 10);
    return n < 9 ? n : 0;
  };

  const buttons = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="bg-warning p-2">
      <div className="container ">
        <div className="row bg-dark-subtle mb-1 text-end">
          <div className="col">{expression}</div>
        </div>
        <div className="row text-center">
          {buttons.map((value, index) => (
            <div key={index} className="col-3 p-1">
              <button
                style={{ width: "100%", height: "60px" }}
                className="btn-calc bg-warning-subtle rounded btn"
                onClick={() => handleOnClick(value)}
              >
                {value}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
