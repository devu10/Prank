var exp = "";
const lastVal = (last) => {
  if (
    last === "%" ||
    last === "/" ||
    last === "-" ||
    last === "*" ||
    last === "+"
  ) {
    return true;
  }
};
const display = document.querySelector(".display");
const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
  exp += 7;
  console.log(exp);
  display.innerText = exp;
});
const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
  exp += 8;
  console.log(exp);
  display.innerText = exp;
});
const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
  exp += 9;
  console.log(exp);
  display.innerText = exp;
});
const four = document.querySelector(".four");
four.addEventListener("click", () => {
  exp += 4;
  console.log(exp);
  display.innerText = exp;
});
const five = document.querySelector(".five");
five.addEventListener("click", () => {
  exp += 5;
  console.log(exp);
  display.innerText = exp;
});
const six = document.querySelector(".six");
six.addEventListener("click", () => {
  exp += 6;
  console.log(exp);
  display.innerText = exp;
});
const one = document.querySelector(".one");
one.addEventListener("click", () => {
  exp += 1;
  console.log(exp);
  display.innerText = exp;
});
const two = document.querySelector(".two");
two.addEventListener("click", () => {
  exp += 2;
  console.log(exp);
  display.innerText = exp;
});
const three = document.querySelector(".three");
three.addEventListener("click", () => {
  exp += 3;
  console.log(exp);
  display.innerText = exp;
});
const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
  exp += 0;
  console.log(exp);
  display.innerText = exp;
});
const dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
  !exp.includes(".") && (exp += ".");
  display.innerText = exp;
  console.log(exp);
});
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  exp = display.innerText = eval(exp);
  console.log(exp);
});
const ac = document.querySelector(".ac");
ac.addEventListener("click", () => {
  exp = "";
  display.innerHTML = exp;
});
const c = document.querySelector(".c");
c.addEventListener("click", () => {
  exp = exp.slice(0, -1);
  display.innerText = exp;
});
const per = document.querySelector(".per");
per.addEventListener("click", () => {
  const last = exp.charAt(exp.length - 1);
  !lastVal(last) && (exp += "%");
  display.innerText = exp;
});
const divide = document.querySelector(".divide");
divide.addEventListener("click", () => {
  const last = exp.charAt(exp.length - 1);
  !lastVal(last) && (exp += "/");
  display.innerText = exp;
  console.log(exp);
});
const mul = document.querySelector(".mul");
mul.addEventListener("click", () => {
  const last = exp.charAt(exp.length - 1);
  !lastVal(last) && (exp += "*");
  display.innerText = exp;
  console.log(exp);
});
const minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  const last = exp.charAt(exp.length - 1);
  !lastVal(last) && (exp += "-");
  display.innerText = exp;
  console.log(exp);
});
const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  const last = exp.charAt(exp.length - 1);
  !lastVal(last) && (exp += "+");
  display.innerText = exp;
  console.log(exp);
});
