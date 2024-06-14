import React, { useState } from "react";

export const Calculator = () => {
  const [display, setDisplay] = useState("");
  const handleOnClick = (e) => {
    setDisplay(e);
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
          <div className="col">{display}</div>
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
