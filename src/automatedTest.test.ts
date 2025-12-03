import { describe, expect, it } from "vitest";
import { automatedTest } from "./math";

describe("automatedTest", () => {
  it("returns the default message", () => {
    expect(automatedTest()).toBe("Automated test function");
  });

  it("echoes a custom message when provided", () => {
    expect(automatedTest("Custom message")).toBe("Custom message");
  });
});
