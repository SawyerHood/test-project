import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide, power, modulo } from "./math";

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

  it("should throw error for division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });
});

describe("power", () => {
  it("should calculate power correctly", () => {
    expect(power(2, 3)).toBe(8);
  });

  it("should handle power of 0", () => {
    expect(power(5, 0)).toBe(1);
  });
});

describe("modulo", () => {
  it("should calculate modulo correctly", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  it("should throw error for modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed");
  });
});
