"use strict";

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generate = document.getElementById("generate");
const clipboardEl = document.getElementById("clippboard");

generate.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  console.log(length);

  resultEl.innerText = genPassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function genPassword(lower, upper, number, symbol, length) {
  //! Init password var

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;

  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  // console.log(typesArray);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach((type) => {
      const funcName = Object.keys(type)[0];

      // console.log("funcName:", funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPass = generatedPassword.slice(0, length);
  return finalPass;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}:"<>?';
  return symbols[Math.floor(Math.random() * symbols.length) + 1];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());
