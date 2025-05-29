import { describe, it, expect } from "vitest";
import { add, multiply } from "./math";

describe("add", () => {
  it("should add two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("multiply", () => {
  it("should multiply two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
