import jest from "jest-mock";
import {
  loopTriangle,
  fizzBuzz,
  fizzAndBuzz,
  chessBoard,
} from "./02-program-structure.js";

describe("Looping a triangle exercise", () => {
  it("it prints 7 lines, containing # character repeated the same times as the current line number", () => {
    console.log = jest.fn();
    loopTriangle(7);

    expect(console.log.mock.calls[0][0]).toBe("#");
    expect(console.log.mock.calls[1][0]).toBe("##");
    expect(console.log.mock.calls[2][0]).toBe("###");
    expect(console.log.mock.calls[3][0]).toBe("####");
    expect(console.log.mock.calls[4][0]).toBe("#####");
    expect(console.log.mock.calls[5][0]).toBe("######");
    expect(console.log.mock.calls[6][0]).toBe("#######");
  });
});

describe("FizzBuzz exercise", () => {
  it("prints numbers from 0 to 100, prints Fizz for numbers divisible by 3, Buzz for numbers divisible by 5", () => {
    console.log = jest.fn();
    fizzBuzz(100);

    expect(console.log.mock.calls[0][0]).toBe(1);
    expect(console.log.mock.calls[1][0]).toBe(2);
    expect(console.log.mock.calls[2][0]).toBe("Fizz");
    expect(console.log.mock.calls[4][0]).toBe("Buzz");
    expect(console.log.mock.calls[9][0]).toBe("Buzz");
    expect(console.log.mock.calls[14][0]).toBe("Fizz");
    expect(console.log.mock.calls[49][0]).toBe("Buzz");
    expect(console.log.mock.calls[59][0]).toBe("Fizz");
    expect(console.log.mock.calls[97][0]).toBe(98);
    expect(console.log.mock.calls[99][0]).toBe("Buzz");
  });

  it("prints numbers from 0 to 100, prints FizzBuzz for numbers disivible by 3 and 5, prints Fizz for numbers divisible by 3, Buzz for numbers divisible by 5", () => {
    console.log = jest.fn();
    fizzAndBuzz(100);

    expect(console.log.mock.calls[0][0]).toBe(1);
    expect(console.log.mock.calls[1][0]).toBe(2);
    expect(console.log.mock.calls[2][0]).toBe("Fizz");
    expect(console.log.mock.calls[4][0]).toBe("Buzz");
    expect(console.log.mock.calls[9][0]).toBe("Buzz");
    expect(console.log.mock.calls[14][0]).toBe("FizzBuzz");
    expect(console.log.mock.calls[29][0]).toBe("FizzBuzz");
    expect(console.log.mock.calls[49][0]).toBe("Buzz");
    expect(console.log.mock.calls[59][0]).toBe("FizzBuzz");
    expect(console.log.mock.calls[97][0]).toBe(98);
    expect(console.log.mock.calls[99][0]).toBe("Buzz");
  });
});

describe("Chessboard exercise", () => {
  it("generates chessboard 2x2", () => {
    const assert = chessBoard(2);

    const line1 = " #";
    const line2 = "# ";

    const result = `${line1}\n${line2}\n`;
    expect(assert).toEqual(result);
  });

  it("generates chessboard 4x4", () => {
    const assert = chessBoard(4);

    const line1 = " # #";
    const line2 = "# # ";
    const line3 = " # #";
    const line4 = "# # ";

    const result = `${line1}\n${line2}\n${line3}\n${line4}\n`;
    expect(assert).toEqual(result);
  });
});
