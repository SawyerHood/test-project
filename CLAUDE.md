# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple TypeScript project for mathematical operations using Vitest as the testing framework. The project uses PNPM as the package manager and ES modules.

## Commands

### Testing
- `pnpm test` - Run all tests using Vitest
- `vitest run` - Alternative way to run tests directly

### Package Management
- `pnpm install` - Install dependencies (uses PNPM 10.10.0)

## Architecture

### Project Structure
- `/src/` - Main source code directory
  - `math.ts` - Contains mathematical utility functions
  - `math.test.ts` - Vitest test files for math utilities

### Configuration
- **TypeScript**: ES2016 target with ESNext modules, strict mode enabled
- **Testing**: Vitest with global test functions and Node.js environment
- **Module System**: ES modules (`"type": "module"` in package.json)
- **Package Manager**: PNPM with version pinned to 10.10.0

### Testing Patterns
- Tests use Vitest's `describe`, `it`, and `expect` globals
- Test files follow the `*.test.ts` naming convention
- Tests are co-located with source files in the `/src/` directory