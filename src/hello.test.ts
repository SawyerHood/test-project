import { describe, it, expect } from "vitest";
import { helloWorld } from "./hello";

describe("helloWorld", () => {
  it("returns the expected greeting", () => {
    expect(helloWorld()).toBe("Hello, world!");
  });
});
