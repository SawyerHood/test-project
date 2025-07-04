export const greet = (): string => {
  return "Hello, World!";
};

export const printGreeting = (): void => {
  console.log(greet());
};

// Run the function if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  printGreeting();
}