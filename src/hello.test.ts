import { describe, it, expect } from 'vitest';
import { greet } from './hello';

describe('Hello World', () => {
  it('should return "Hello, World!"', () => {
    expect(greet()).toBe('Hello, World!');
  });
});