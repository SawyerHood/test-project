export const add = (a: number, b: number): number => {
  return a + b;
};

/**
 * Utility to confirm the automated test wiring is in place.
 * Returns the provided message or a sensible default.
 */
export const automatedTest = (message = "Automated test function"): string => {
  return message;
};
