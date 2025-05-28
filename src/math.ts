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
    throw new Error("Cannot compute square root of negative number");
  }
  return Math.sqrt(value);
};

export const abs = (value: number): number => {
  return Math.abs(value);
};

export const floor = (value: number): number => {
  return Math.floor(value);
};

export const ceil = (value: number): number => {
  return Math.ceil(value);
};

export const round = (value: number): number => {
  return Math.round(value);
};

export const max = (...values: number[]): number => {
  if (values.length === 0) {
    throw new Error("Cannot find max of empty array");
  }
  return Math.max(...values);
};

export const min = (...values: number[]): number => {
  if (values.length === 0) {
    throw new Error("Cannot find min of empty array");
  }
  return Math.min(...values);
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

export const asin = (value: number): number => {
  if (value < -1 || value > 1) {
    throw new Error("Value must be between -1 and 1 for asin");
  }
  return Math.asin(value);
};

export const acos = (value: number): number => {
  if (value < -1 || value > 1) {
    throw new Error("Value must be between -1 and 1 for acos");
  }
  return Math.acos(value);
};

export const atan = (value: number): number => {
  return Math.atan(value);
};

export const log = (value: number): number => {
  if (value <= 0) {
    throw new Error("Cannot compute logarithm of non-positive number");
  }
  return Math.log(value);
};

export const log10 = (value: number): number => {
  if (value <= 0) {
    throw new Error("Cannot compute logarithm of non-positive number");
  }
  return Math.log10(value);
};
