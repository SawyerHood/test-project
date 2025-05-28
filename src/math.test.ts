import { describe, it, expect } from "vitest";
import { 
  add, 
  subtract, 
  multiply, 
  divide, 
  power, 
  sqrt, 
  factorial, 
  sin, 
  cos, 
  tan, 
  abs, 
  round, 
  floor, 
  ceil 
} from "./math";

describe("add", () => {
  it("should add two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
  });
});

describe("multiply", () => {
  it("should multiply two numbers correctly", () => {
    expect(multiply(4, 3)).toBe(12);
  });
});

describe("divide", () => {
  it("should divide two numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("should throw error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });
});

describe("power", () => {
  it("should calculate power correctly", () => {
    expect(power(2, 3)).toBe(8);
    expect(power(5, 2)).toBe(25);
  });
});

describe("sqrt", () => {
  it("should calculate square root correctly", () => {
    expect(sqrt(9)).toBe(3);
    expect(sqrt(16)).toBe(4);
  });

  it("should throw error for negative numbers", () => {
    expect(() => sqrt(-1)).toThrow("Square root of negative number is not allowed");
  });
});

describe("factorial", () => {
  it("should calculate factorial correctly", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
  });

  it("should throw error for negative numbers", () => {
    expect(() => factorial(-1)).toThrow("Factorial is only defined for non-negative integers");
  });

  it("should throw error for non-integers", () => {
    expect(() => factorial(3.5)).toThrow("Factorial is only defined for non-negative integers");
  });
});

describe("sin", () => {
  it("should calculate sine correctly", () => {
    expect(sin(0)).toBe(0);
    expect(sin(Math.PI / 2)).toBeCloseTo(1);
  });
});

describe("cos", () => {
  it("should calculate cosine correctly", () => {
    expect(cos(0)).toBe(1);
    expect(cos(Math.PI)).toBeCloseTo(-1);
  });
});

describe("tan", () => {
  it("should calculate tangent correctly", () => {
    expect(tan(0)).toBe(0);
    expect(tan(Math.PI / 4)).toBeCloseTo(1);
  });
});

describe("abs", () => {
  it("should return absolute value correctly", () => {
    expect(abs(-5)).toBe(5);
    expect(abs(5)).toBe(5);
    expect(abs(0)).toBe(0);
  });
});

describe("round", () => {
  it("should round numbers correctly", () => {
    expect(round(3.14159)).toBe(3);
    expect(round(3.14159, 2)).toBe(3.14);
    expect(round(3.14159, 4)).toBe(3.1416);
  });
});

describe("floor", () => {
  it("should floor numbers correctly", () => {
    expect(floor(3.7)).toBe(3);
    expect(floor(-2.1)).toBe(-3);
  });
});

describe("ceil", () => {
  it("should ceil numbers correctly", () => {
    expect(ceil(3.1)).toBe(4);
    expect(ceil(-2.9)).toBe(-2);
  });
});
