
# 📘 Chapter 2: Variables and Data Types in JavaScript

This chapter covers the foundational concepts of **variables** and **data types** in JavaScript. You'll learn how to declare variables using different keywords, understand naming rules, and explore primitive and non-primitive data types with examples.

---

## 📌 Variable Declaration Keywords

In JavaScript, variables can be declared using:

- `var` – function-scoped, can be redeclared
- `let` – block-scoped, can be reassigned
- `const` – block-scoped, **cannot be reassigned**

```js
var nameOn = 'Duck';
let varName = "Variables and Data Types";
const variableName = 'Hello!';
```

---

## 🧠 Variable Naming Rules

1. Must start with a **letter**, **underscore `_`**, or **dollar sign `$`**
2. Cannot start with a number
3. Can contain letters, digits, underscores, and dollar signs
4. Are **case-sensitive**
5. Cannot be reserved keywords
6. Should be **meaningful** and **unique**

```js
const $name = 'John Doe';
const _name = 'Jane Doe';
const name = 'Johny Doe';
```

---

## 🧾 Making Code Readable

Use `console.log()` to output values and improve debugging and readability.

```js
console.log(nameOn);
console.log(varName);
console.log(variableName);
```

---

## 🗂️ Data Types in JavaScript

JavaScript data types are classified into two main categories:

### 🔹 Primitive Types

- **String**
- **Number**
- **BigInt**
- **Boolean**
- **Undefined**
- **Null**
- **Symbol**

### 🔸 Non-Primitive Types

- **Object** (including Arrays, Functions, etc.)

---

## 🔤 String

```js
const exampleString = 'Hello world!';
const exampleString1 = "Double quotes";
const exampleString2 = `Backticks (template literals)`;
const iName = 'Olive Dey';
const iAge = 15;
const iMsg = `My daughter's name is ${iName} and she is ${iAge} years old today!`;

console.log(iMsg); // String Interpolation using backticks
```

---

## 🔢 Numbers

```js
const wholeNumber = 10000;
const decimalNumber = 0.353535;
const result = 10 * 20;

console.log(result);
```

---

## ✅ Boolean

Represents `true` or `false` (used in conditions):

```js
const isCool = 0; // falsey value

if (isCool) {
  console.log("You're cool!");
} else {
  console.log("Hi stranger!");
}
```

---

## ⛔ Null

Explicitly represents no value:

```js
let age = null;
age = 20;
console.log(age); // 20
```

---

## ❓ Undefined

A variable declared but not initialized:

```js
let a;
console.log(a); // undefined
```

---

## 🧱 Object

Stores key-value pairs:

```js
const person = {
  name: 'John',
  age: 20,
};

console.log(person.name); // Access via dot notation
console.log(typeof person.name); // string
```

---

## ⏳ JavaScript is Dynamically Typed

Variables can change types at runtime:

```js
let x = 10;
console.log(typeof x); // number

x = "Hello";
console.log(typeof x); // string

x = true;
console.log(typeof x); // boolean
```

---

## 🧪 Console Output Sample

```js
console.log(typeof "Hi"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof null); // object (known JS quirk)
console.log(typeof undefined); // undefined
```

---

## ✅ Summary

| Keyword | Scope        | Reassignable | Redeclarable |
|---------|--------------|--------------|--------------|
| var     | Function     | ✅           | ✅           |
| let     | Block        | ✅           | ❌           |
| const   | Block        | ❌           | ❌           |

> JavaScript allows flexibility in handling types and values, making it a powerful yet sometimes confusing language. Mastering variables and data types is key to writing robust JS code.

---

## 📎 Next Chapter

➡️ [Chapter 3 - Operators in JavaScript](#) _(coming soon)_
