import { describe, it, expect } from "vitest";
import { 
  add, subtract, multiply, divide, power, sqrt, abs, floor, ceil, round, 
  max, min, sin, cos, tan, asin, acos, atan, log, log10 
} from "./math";

describe("Basic arithmetic", () => {
  describe("add", () => {
    it("should add two numbers correctly", () => {
      expect(add(1, 2)).toBe(3);
      expect(add(-1, 1)).toBe(0);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers correctly", () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(1, 1)).toBe(0);
      expect(subtract(-1, -1)).toBe(0);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers correctly", () => {
      expect(multiply(3, 4)).toBe(12);
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(0, 5)).toBe(0);
    });
  });

  describe("divide", () => {
    it("should divide two numbers correctly", () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(1, 3)).toBeCloseTo(0.333333);
    });

    it("should throw error when dividing by zero", () => {
      expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
    });
  });
});

describe("Advanced mathematical functions", () => {
  describe("power", () => {
    it("should calculate power correctly", () => {
      expect(power(2, 3)).toBe(8);
      expect(power(5, 0)).toBe(1);
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
      expect(() => sqrt(-1)).toThrow("Cannot compute square root of negative number");
    });
  });

  describe("abs", () => {
    it("should return absolute value", () => {
      expect(abs(-5)).toBe(5);
      expect(abs(5)).toBe(5);
      expect(abs(0)).toBe(0);
    });
  });

  describe("floor", () => {
    it("should floor numbers correctly", () => {
      expect(floor(4.7)).toBe(4);
      expect(floor(-2.3)).toBe(-3);
      expect(floor(5)).toBe(5);
    });
  });

  describe("ceil", () => {
    it("should ceil numbers correctly", () => {
      expect(ceil(4.2)).toBe(5);
      expect(ceil(-2.7)).toBe(-2);
      expect(ceil(5)).toBe(5);
    });
  });

  describe("round", () => {
    it("should round numbers correctly", () => {
      expect(round(4.4)).toBe(4);
      expect(round(4.6)).toBe(5);
      expect(round(-2.5)).toBe(-2);
    });
  });

  describe("max", () => {
    it("should find maximum value", () => {
      expect(max(1, 2, 3)).toBe(3);
      expect(max(-1, -5, -2)).toBe(-1);
      expect(max(5)).toBe(5);
    });

    it("should throw error for empty array", () => {
      expect(() => max()).toThrow("Cannot find max of empty array");
    });
  });

  describe("min", () => {
    it("should find minimum value", () => {
      expect(min(1, 2, 3)).toBe(1);
      expect(min(-1, -5, -2)).toBe(-5);
      expect(min(5)).toBe(5);
    });

    it("should throw error for empty array", () => {
      expect(() => min()).toThrow("Cannot find min of empty array");
    });
  });
});

describe("Trigonometric functions", () => {
  describe("sin", () => {
    it("should calculate sine correctly", () => {
      expect(sin(0)).toBe(0);
      expect(sin(Math.PI / 2)).toBeCloseTo(1);
      expect(sin(Math.PI)).toBeCloseTo(0);
    });
  });

  describe("cos", () => {
    it("should calculate cosine correctly", () => {
      expect(cos(0)).toBe(1);
      expect(cos(Math.PI / 2)).toBeCloseTo(0);
      expect(cos(Math.PI)).toBeCloseTo(-1);
    });
  });

  describe("tan", () => {
    it("should calculate tangent correctly", () => {
      expect(tan(0)).toBe(0);
      expect(tan(Math.PI / 4)).toBeCloseTo(1);
    });
  });

  describe("asin", () => {
    it("should calculate arcsine correctly", () => {
      expect(asin(0)).toBe(0);
      expect(asin(1)).toBeCloseTo(Math.PI / 2);
    });

    it("should throw error for values outside [-1, 1]", () => {
      expect(() => asin(2)).toThrow("Value must be between -1 and 1 for asin");
      expect(() => asin(-2)).toThrow("Value must be between -1 and 1 for asin");
    });
  });

  describe("acos", () => {
    it("should calculate arccosine correctly", () => {
      expect(acos(1)).toBe(0);
      expect(acos(0)).toBeCloseTo(Math.PI / 2);
    });

    it("should throw error for values outside [-1, 1]", () => {
      expect(() => acos(2)).toThrow("Value must be between -1 and 1 for acos");
      expect(() => acos(-2)).toThrow("Value must be between -1 and 1 for acos");
    });
  });

  describe("atan", () => {
    it("should calculate arctangent correctly", () => {
      expect(atan(0)).toBe(0);
      expect(atan(1)).toBeCloseTo(Math.PI / 4);
    });
  });
});

describe("Logarithmic functions", () => {
  describe("log", () => {
    it("should calculate natural logarithm correctly", () => {
      expect(log(Math.E)).toBeCloseTo(1);
      expect(log(1)).toBe(0);
    });

    it("should throw error for non-positive numbers", () => {
      expect(() => log(0)).toThrow("Cannot compute logarithm of non-positive number");
      expect(() => log(-1)).toThrow("Cannot compute logarithm of non-positive number");
    });
  });

  describe("log10", () => {
    it("should calculate base-10 logarithm correctly", () => {
      expect(log10(10)).toBe(1);
      expect(log10(100)).toBe(2);
      expect(log10(1)).toBe(0);
    });

    it("should throw error for non-positive numbers", () => {
      expect(() => log10(0)).toThrow("Cannot compute logarithm of non-positive number");
      expect(() => log10(-1)).toThrow("Cannot compute logarithm of non-positive number");
    });
  });
});
