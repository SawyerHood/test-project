export const add = (a: number, b: number): number => {
  return a + b;
};

export const subtract = (a: number, b: number): number => {
  return a - b;
};

export const multiply = (a: number, b: number): number => {
  return a * b;
};

export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
};

export const power = (base: number, exponent: number): number => {
  return Math.pow(base, exponent);
};

export const sqrt = (value: number): number => {
  if (value < 0) {
    throw new Error("Square root of negative number is not allowed");
  }
  return Math.sqrt(value);
};

export const factorial = (n: number): number => {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Factorial is only defined for non-negative integers");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

export const sin = (angle: number): number => {
  return Math.sin(angle);
};

export const cos = (angle: number): number => {
  return Math.cos(angle);
};

export const tan = (angle: number): number => {
  return Math.tan(angle);
};

export const abs = (value: number): number => {
  return Math.abs(value);
};

export const round = (value: number, decimals: number = 0): number => {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
};

export const floor = (value: number): number => {
  return Math.floor(value);
};

export const ceil = (value: number): number => {
  return Math.ceil(value);
};
