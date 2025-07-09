import { describe, it, expect } from "vitest";
import { add, subtract } from "./math";

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
