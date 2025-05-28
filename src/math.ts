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
  if (b === 0) throw new Error("Division by zero");
  return a / b;
};

export const power = (base: number, exponent: number): number => {
  return Math.pow(base, exponent);
};

export const sqrt = (n: number): number => {
  if (n < 0) throw new Error("Cannot take square root of negative number");
  return Math.sqrt(n);
};

export const factorial = (n: number): number => {
  if (n < 0 || !Number.isInteger(n)) throw new Error("Factorial only defined for non-negative integers");
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

export const gcd = (a: number, b: number): number => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const lcm = (a: number, b: number): number => {
  return Math.abs(a * b) / gcd(a, b);
};

export const isPrime = (n: number): boolean => {
  if (n < 2 || !Number.isInteger(n)) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};
