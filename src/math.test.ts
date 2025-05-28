import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide, power, sqrt, factorial, gcd, lcm, isPrime } from "./math";

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
    expect(() => divide(5, 0)).toThrow("Division by zero");
  });
});

describe("power", () => {
  it("should calculate power correctly", () => {
    expect(power(2, 3)).toBe(8);
    expect(power(5, 0)).toBe(1);
  });
});

describe("sqrt", () => {
  it("should calculate square root correctly", () => {
    expect(sqrt(9)).toBe(3);
    expect(sqrt(16)).toBe(4);
  });

  it("should throw error for negative numbers", () => {
    expect(() => sqrt(-1)).toThrow("Cannot take square root of negative number");
  });
});

describe("factorial", () => {
  it("should calculate factorial correctly", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
  });

  it("should throw error for negative numbers", () => {
    expect(() => factorial(-1)).toThrow("Factorial only defined for non-negative integers");
  });

  it("should throw error for non-integers", () => {
    expect(() => factorial(3.5)).toThrow("Factorial only defined for non-negative integers");
  });
});

describe("gcd", () => {
  it("should calculate greatest common divisor correctly", () => {
    expect(gcd(48, 18)).toBe(6);
    expect(gcd(12, 8)).toBe(4);
    expect(gcd(7, 3)).toBe(1);
  });
});

describe("lcm", () => {
  it("should calculate least common multiple correctly", () => {
    expect(lcm(4, 6)).toBe(12);
    expect(lcm(15, 20)).toBe(60);
  });
});

describe("isPrime", () => {
  it("should identify prime numbers correctly", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  it("should identify non-prime numbers correctly", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(15)).toBe(false);
  });

  it("should return false for negative numbers and non-integers", () => {
    expect(isPrime(-5)).toBe(false);
    expect(isPrime(3.5)).toBe(false);
  });
});
