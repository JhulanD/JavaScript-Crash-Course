# Chapter 2 - Variables and Data Types in JavaScript

## Overview
This chapter provides a comprehensive introduction to **variables** and **data types** in JavaScript. It covers:

- Declaring variables using `var`, `let`, and `const`
- Variable naming rules and best practices
- Primitive data types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
- Non-primitive data type: Object
- String literals, including single, double, and backtick quotes
- String interpolation using backticks (template literals)
- Basic arithmetic with numbers
- Boolean values and their use in conditional statements
- `null` and `undefined` explained with examples
- Objects and how to access their properties
- JavaScript as a dynamically typed language

## Variable Declaration Keywords

- `var` — function or global scoped variable, re-declarable and mutable.
- `let` — block scoped variable, mutable but cannot be re-declared in the same scope.
- `const` — block scoped constant; must be assigned at declaration and cannot be reassigned.

var nameOn = 'Duck';
let varName = "Variables and Data Types";
const variableName = 'Hello!';