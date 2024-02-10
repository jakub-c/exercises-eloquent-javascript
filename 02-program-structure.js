import { range } from "./utils.js";

export const loopTriangle = (length) => {
  return range(0, length).map((index) => {
    console.log("#".repeat(index + 1));
  });
};

export const fizzBuzz = (length) => {
  return range(0, length).map((index) => {
    const currentNumber = index + 1;
    if (currentNumber % 3 === 0) console.log("Fizz");
    else if (currentNumber % 5 === 0) console.log("Buzz");
    else console.log(currentNumber);
  });
};

export const fizzAndBuzz = (length) => {
  return range(0, length).map((index) => {
    const currentNumber = index + 1;
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0)
      return console.log("FizzBuzz");
    else if (currentNumber % 3 === 0) return console.log("Fizz");
    else if (currentNumber % 5 === 0) return console.log("Buzz");
    else console.log(currentNumber);
  });
};

export const chessBoard = (size) => {
  const isEven = (val) => val % 2 === 0;

  const evenLine = range(0, size)
    .map((index) => (isEven(index) ? " " : "#"))
    .join("");
  const oddLine = range(0, size)
    .map((index) => (isEven(index) ? "#" : " "))
    .join("");

  const line = (lineNo) => (isEven(lineNo) ? `${evenLine}\n` : `${oddLine}\n`);

  return range(0, size).reduce((acc, val) => (acc += line(val)), "");
};
