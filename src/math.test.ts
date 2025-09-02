import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide, power, sqrt, factorial, abs, round, min, max } from "./math";

describe("add", () => {
  it("should add two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(1, 5)).toBe(-4);
  });
});

describe("multiply", () => {
  it("should multiply two numbers correctly", () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 5)).toBe(-10);
    expect(multiply(0, 10)).toBe(0);
  });
});

describe("divide", () => {
  it("should divide two numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(7, 2)).toBe(3.5);
  });

  it("should throw error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
  });
});

describe("power", () => {
  it("should calculate power correctly", () => {
    expect(power(2, 3)).toBe(8);
    expect(power(5, 2)).toBe(25);
    expect(power(10, 0)).toBe(1);
    expect(power(2, -1)).toBe(0.5);
  });
});

describe("sqrt", () => {
  it("should calculate square root correctly", () => {
    expect(sqrt(9)).toBe(3);
    expect(sqrt(16)).toBe(4);
    expect(sqrt(0)).toBe(0);
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
    expect(factorial(3)).toBe(6);
  });

  it("should throw error for negative numbers", () => {
    expect(() => factorial(-1)).toThrow("Factorial of negative number is not allowed");
  });

  it("should throw error for non-integers", () => {
    expect(() => factorial(3.5)).toThrow("Factorial is only defined for integers");
  });
});

describe("abs", () => {
  it("should return absolute value correctly", () => {
    expect(abs(5)).toBe(5);
    expect(abs(-5)).toBe(5);
    expect(abs(0)).toBe(0);
  });
});

describe("round", () => {
  it("should round numbers correctly", () => {
    expect(round(3.14159)).toBe(3);
    expect(round(3.14159, 2)).toBe(3.14);
    expect(round(3.7)).toBe(4);
    expect(round(2.5)).toBe(3);
  });
});

describe("min", () => {
  it("should find minimum value correctly", () => {
    expect(min(1, 2, 3)).toBe(1);
    expect(min(5, -2, 8)).toBe(-2);
    expect(min(10)).toBe(10);
  });

  it("should throw error for empty array", () => {
    expect(() => min()).toThrow("At least one value is required");
  });
});

describe("max", () => {
  it("should find maximum value correctly", () => {
    expect(max(1, 2, 3)).toBe(3);
    expect(max(5, -2, 8)).toBe(8);
    expect(max(10)).toBe(10);
  });

  it("should throw error for empty array", () => {
    expect(() => max()).toThrow("At least one value is required");
  });
});
